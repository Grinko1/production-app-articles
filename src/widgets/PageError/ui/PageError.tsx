import { memo } from 'react';
import cls from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className, 'dark'])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button theme={ButtonTheme.OUTLINE} onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
});
