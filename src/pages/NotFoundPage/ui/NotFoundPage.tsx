import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</div>
  );
});