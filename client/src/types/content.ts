export interface Diary {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  content: string;
}

export interface Note {
  id: string;
  slug: string;
  title: string;
  subject: string;
  date: string;
  preview: string;
  color?: string;
  content: string;
}

export interface Drawing {
  id: string;
  src: string;
  title: string;
  description?: string;
}

