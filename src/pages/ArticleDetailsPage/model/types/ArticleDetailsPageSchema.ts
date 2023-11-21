import { type Article } from 'entities/Article';

export interface ArticleDetailsPageSchema {
  isLoading?: boolean;
  error?: string;
  data?: Article;
}
