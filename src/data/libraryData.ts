
import { Book, Video, Podcast } from '@/types/library';

export const books: Book[] = [
  {
    id: 1,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    coverImg: "https://m.media-amazon.com/images/I/91yj3mbz4JL._AC_UF1000,1000_QL80_.jpg",
    category: "Value Investing",
    description: "The classic text on value investing. Graham's philosophy of 'value investing' has made this book the investment bible for generations of investors.",
    summary: "The Intelligent Investor teaches a realistic approach to investing in stocks, focusing on fundamental analysis rather than market speculation. Graham introduces the concept of 'margin of safety' as a principle of investment operations, encouraging investors to focus on intrinsic business value rather than market fluctuations. This defensive, conservative approach to investing has influenced many successful investors, most notably Warren Buffett."
  },
  {
    id: 2,
    title: "Common Stocks and Uncommon Profits",
    author: "Philip Fisher",
    coverImg: "https://m.media-amazon.com/images/I/81ofrCfBYsL._AC_UF1000,1000_QL80_.jpg",
    category: "Business Analysis",
    description: "Fisher's investment philosophies, introduced almost forty years ago, are not only studied and applied by today's finance professionals, but are also regarded by many as gospel.",
    summary: "Philip Fisher presents a growth-oriented investment strategy focusing on companies with potential for sustainable expansion. The book introduces his famous 'Fifteen Points to Look for in a Common Stock' - a comprehensive framework for evaluating a company's long-term potential. Fisher emphasizes the importance of qualitative factors in investment decisions and advocates for a concentrated portfolio of quality companies held for the long term."
  },
  {
    id: 3,
    title: "Margin of Safety",
    author: "Seth Klarman",
    coverImg: "https://cdn.kobo.com/book-images/8a05d6c1-0637-4a68-944e-9e9d49524be8/1200/1200/False/margin-of-safety-30.jpg",
    category: "Value Investing",
    description: "A rare book on risk-averse value investing strategies for the average investor. Klarman explains his approach to finding values in any type of market.",
    summary: "Seth Klarman's rare investment classic focuses on risk management as the primary consideration in investment. He argues that preserving capital should take precedence over seeking returns, introducing the concept of 'margin of safety' as a buffer against errors in judgment or market volatility. The book provides practical strategies for finding value in various market conditions, including distressed debt, bankruptcies, and spinoffs."
  },
  {
    id: 4,
    title: "The Most Important Thing",
    author: "Howard Marks",
    coverImg: "https://m.media-amazon.com/images/I/71EiEWiZ8QL._AC_UF1000,1000_QL80_.jpg",
    category: "Market Perspectives",
    description: "Howard Marks, the chairman and cofounder of Oaktree Capital Management, is renowned for his insightful assessments of market opportunity and risk.",
    summary: "Howard Marks distills decades of investment wisdom into his concept of 'second-level thinking'—going beyond the obvious to understand broader implications and counterintuitive outcomes. The book emphasizes the cyclical nature of markets and the importance of understanding investor psychology. Marks stresses that superior investment results come from spotting and taking advantage of market inefficiencies while maintaining a strong awareness of risk."
  },
  {
    id: 5,
    title: "Capital Returns",
    author: "Edward Chancellor",
    coverImg: "https://m.media-amazon.com/images/I/71MYz7NzdWL._AC_UF1000,1000_QL80_.jpg",
    category: "Capital Allocation",
    description: "This book focuses on the practical implementation of the capital cycle approach to investment. Edited by Edward Chancellor, the book collects the best insights from Marathon Asset Management.",
    summary: "Edward Chancellor presents the capital cycle approach to investment, focusing on how changes in the supply of capital affect investment returns. The book demonstrates how excessive capital allocation to successful industries eventually leads to poor returns, while capital scarcity in struggling sectors can set the stage for future outperformance. This framework provides investors with a contrarian perspective that can identify potential investment opportunities by following capital flows."
  },
  {
    id: 6,
    title: "Poor Charlie's Almanack",
    author: "Charles T. Munger",
    coverImg: "https://m.media-amazon.com/images/I/61YvqYX0-yL._SY466_.jpg",
    category: "Business Analysis",
    description: "Charlie Munger's insights on decision-making, psychology, and mental models that have guided his investment approaches.",
    summary: "Charlie Munger's collected wisdom emphasizes the importance of multidisciplinary thinking in decision-making and investment. The book introduces Munger's concept of a 'latticework of mental models' drawn from various disciplines such as psychology, mathematics, and physics. His approach focuses on avoiding mistakes through awareness of cognitive biases and developing a checklist-based framework for evaluating investment opportunities."
  },
  {
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    coverImg: "https://m.media-amazon.com/images/I/71J3+5lrCKL._AC_UF1000,1000_QL80_.jpg",
    category: "Behavioral Finance",
    description: "Timeless lessons on wealth, greed, and happiness. Doing well with money isn't necessarily about what you know. It's about how you behave.",
    summary: "Morgan Housel explores how psychology affects financial decisions more than financial knowledge. Through a series of short stories, he illustrates that successful investing is less about technical skills and more about behavior, patience, and the right mindset. The book emphasizes that personal history, unique experiences, and worldview shape how individuals interact with money, often in ways that traditional economic theory fails to capture."
  },
  {
    id: 8,
    title: "Security Analysis",
    author: "Benjamin Graham & David Dodd",
    coverImg: "https://m.media-amazon.com/images/I/91jKSQTG6GL._AC_UF1000,1000_QL80_.jpg",
    category: "Value Investing",
    description: "The classic text that first articulated value investing. A must-read for serious investors seeking long-term success.",
    summary: "Benjamin Graham and David Dodd's foundational text established the framework for value investing, focusing on analyzing financial statements to find companies trading below their intrinsic value. The book provides detailed approaches to evaluating stocks, bonds, and other securities, with an emphasis on finding a 'margin of safety' in investments. This methodical, numbers-based approach to investment analysis revolutionized how investors evaluate securities."
  }
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Value Investing in a Changing World",
    thumbnail: "https://i.ytimg.com/vi/2MZQn5NBuGc/maxresdefault.jpg",
    duration: "45:30",
    category: "Value Investing",
    description: "An in-depth exploration of how value investing principles adapt to today's rapidly evolving markets while maintaining core fundamentals."
  },
  {
    id: 2,
    title: "Building Sustainable Business Models",
    thumbnail: "https://i.ytimg.com/vi/NiAZ5S76ags/maxresdefault.jpg",
    duration: "38:15",
    category: "Business Strategy",
    description: "This presentation details the key components of creating business models that thrive through market cycles and technological disruption."
  },
  {
    id: 3,
    title: "Capital Allocation: The Art of Decision Making",
    thumbnail: "https://i.ytimg.com/vi/MrDmnN7FQXU/maxresdefault.jpg",
    duration: "52:40",
    category: "Capital Allocation",
    description: "Learn the strategic frameworks used by successful capital allocators to make decisions that compound value over decades."
  },
  {
    id: 4,
    title: "The Future of Investing: AI and Technological Disruption",
    thumbnail: "https://i.ytimg.com/vi/7sRjonStJv0/maxresdefault.jpg",
    duration: "41:25",
    category: "Market Perspectives",
    description: "How artificial intelligence and emerging technologies are reshaping investment strategies and market dynamics."
  }
];

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "The Long View: Investment Horizons",
    host: "James Anderson",
    thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-template-design-podcast-icon-modern-podcast-logo-template_625493-430.jpg",
    duration: "1:12:45",
    category: "Value Investing",
    description: "A deep dive into the advantages of long-term investment strategies, featuring insights from renowned market veterans."
  },
  {
    id: 2,
    title: "Market Analysis & Trends",
    host: "Sarah Reynolds",
    thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-design-template_474309-186.jpg",
    duration: "58:20",
    category: "Market Perspectives",
    description: "Weekly analysis of market movements and emerging trends that matter for long-term investors."
  },
  {
    id: 3,
    title: "The Capital Cycle",
    host: "Edward Chancellor",
    thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-template_93835-212.jpg",
    duration: "1:05:30",
    category: "Capital Allocation",
    description: "Understanding how capital flows influence economic cycles and create investment opportunities."
  },
  {
    id: 4,
    title: "Behavioral Finance: The Psychology of Investing",
    host: "Daniel Kahneman & Richard Thaler",
    thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-design-template_688905-24.jpg",
    duration: "1:24:15",
    category: "Behavioral Finance",
    description: "Two Nobel laureates discuss how cognitive biases impact investment decisions and market dynamics."
  }
];

export const categories = ['All', 'Value Investing', 'Business Analysis', 'Market Perspectives', 'Capital Allocation', 'Behavioral Finance'];
