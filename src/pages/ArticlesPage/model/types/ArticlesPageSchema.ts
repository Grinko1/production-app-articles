import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleView, type Article, type ArticleSortField, type ArticleType, type SortOrder } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
