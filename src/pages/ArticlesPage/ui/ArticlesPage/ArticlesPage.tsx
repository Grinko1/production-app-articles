import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { useSelector } from 'react-redux';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/getArticlesState';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
  className?: string;
}
const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticles({ replace: false }));
  });
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);
  const page = useSelector(getArticlesPageNum);
  const hasMore = useSelector(getArticlesPageHasMore);
  const toggleViewHandler = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );
  const onLoadNextPage = useCallback(() => {
    if (hasMore && !isLoading) {
      dispatch(fetchNextArticlesPage());
      dispatch(articlesPageActions.setPage(page + 1));
    }
  }, [dispatch, page, hasMore, isLoading]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPage} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={toggleViewHandler} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(ArticlesPage);
