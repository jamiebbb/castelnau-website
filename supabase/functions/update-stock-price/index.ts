
import { serve } from "https://deno.land/std@0.170.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ALPHA_VANTAGE_API_KEY = Deno.env.get("ALPHA_VANTAGE_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // For this example, we'll use a specific stock symbol for Castelnau Group
    // In production, you might want to make this configurable
    const symbol = "CGI.L"; // Castelnau Group Ltd on London Stock Exchange

    // Fetch data from Alpha Vantage
    console.log("Fetching stock data for", symbol);
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received data:", JSON.stringify(data, null, 2));

    // Check if we got valid data
    if (!data["Global Quote"] || !data["Global Quote"]["05. price"]) {
      console.error("Invalid data format received:", data);
      throw new Error("Invalid data format received from API");
    }

    const globalQuote = data["Global Quote"];
    
    // Extract relevant information
    const stockData = {
      symbol: symbol,
      price: parseFloat(globalQuote["05. price"]).toFixed(2),
      change: parseFloat(globalQuote["09. change"]).toFixed(2),
      change_percent: globalQuote["10. change percent"].replace("%", ""),
      volume: parseInt(globalQuote["06. volume"]),
      latest_trading_day: globalQuote["07. latest trading day"],
      updated_at: new Date().toISOString(),
    };

    console.log("Parsed stock data:", stockData);

    // Update database
    const { error: upsertError } = await supabase
      .from("stock_prices")
      .upsert({ id: 1, ...stockData })
      .select();

    if (upsertError) {
      console.error("Error updating stock price:", upsertError);
      throw upsertError;
    }

    console.log("Stock price updated successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Stock price updated successfully",
        data: stockData 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error("Error in update-stock-price function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: error.message || "An error occurred while updating stock price" 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
