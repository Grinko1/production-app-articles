import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Article.module.scss';
import { memo } from 'react';

interface ArticleProps {
  className?: string;
}

export const Article = memo((props: ArticleProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.Article, {}, [className])}>{t('')}</div>;
});
