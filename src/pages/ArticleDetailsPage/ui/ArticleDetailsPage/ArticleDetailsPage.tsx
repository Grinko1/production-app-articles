import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}></div>;
};

export default memo(ArticleDetailsPage);
