import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { Page } from 'widgets/Page/Page';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsComments';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/getArticleCommentsState';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addNewCommentForm';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getAddCommentFormText } from 'features/addNewCommentForm/model/selectors/addCommentFormSelectors';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  ArticleDetailsComments: articleDetailsCommentsReducer
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id = '1' } = useParams();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const text = useSelector(getAddCommentFormText);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  const onSendHandler = useCallback(() => {
    dispatch(addCommentForArticle(text));
  }, [dispatch, text]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendHandler} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
