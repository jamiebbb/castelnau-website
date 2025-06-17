
export interface Book {
  id: number;
  title: string;
  author: string;
  coverImg: string;
  category: string;
  description: string;
  summary?: string;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}

export interface Podcast {
  id: number;
  title: string;
  host: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}
