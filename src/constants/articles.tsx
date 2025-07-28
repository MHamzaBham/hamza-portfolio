export interface AuthorType {
  _id: string;
  name: string;
  avatar: string;
}

export interface ArticleType {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  featured_video: string;
  author: AuthorType;
  published: string;
  tags: string[];
}
