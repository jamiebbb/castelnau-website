
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface StockPrice {
  id: number;
  symbol: string;
  price: string;
  change: string;
  change_percent: string;
  volume: number;
  latest_trading_day: string;
  updated_at: string;
}

/**
 * Fetches the latest stock price from Supabase
 */
export const fetchLatestStockPrice = async (): Promise<StockPrice | null> => {
  try {
    // First, try to fetch from our database
    const { data, error } = await supabase
      .from("stock_prices")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1);

    if (error) {
      console.error("Error fetching stock price:", error);
      throw error;
    }

    if (data && data.length > 0) {
      return data[0] as StockPrice;
    }

    // If not available in the database, trigger the edge function
    return await triggerStockPriceUpdate();
  } catch (error) {
    console.error("Error in fetchLatestStockPrice:", error);
    toast.error("Failed to fetch stock price data");
    return null;
  }
};

/**
 * Triggers the update-stock-price edge function
 */
export const triggerStockPriceUpdate = async (): Promise<StockPrice | null> => {
  try {
    const { data, error } = await supabase.functions.invoke("update-stock-price");

    if (error) {
      console.error("Error updating stock price:", error);
      toast.error("Failed to update stock price");
      return null;
    }

    if (data && data.success && data.data) {
      toast.success("Stock price updated successfully");
      return data.data as StockPrice;
    }

    return null;
  } catch (error) {
    console.error("Error triggering stock price update:", error);
    toast.error("Failed to update stock price");
    return null;
  }
};

/**
 * Formats a stock price change to display with color indication
 * Returns an object with the formatted value and a CSS class
 */
export const formatStockChange = (change: string, changePercent: string) => {
  const changeValue = parseFloat(change);
  let colorClass = "text-gray-500";
  
  if (changeValue > 0) {
    colorClass = "text-green-600";
    return {
      value: `+${change} (+${changePercent}%)`,
      colorClass
    };
  } else if (changeValue < 0) {
    colorClass = "text-red-600";
    return {
      value: `${change} (${changePercent}%)`,
      colorClass
    };
  }
  
  return {
    value: `${change} (${changePercent}%)`,
    colorClass
  };
};

/**
 * Formats a date for display
 */
export const formatStockDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  };
  
  return new Date(dateString).toLocaleDateString('en-GB', options);
};
