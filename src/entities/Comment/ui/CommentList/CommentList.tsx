import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { type Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? (
            comments.map((comment) => (
          <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={comment.id} />
            ))
          )
        : (
        <Text title={t('Комментарии отсутствуют')} />
          )}
    </div>
  );
});
