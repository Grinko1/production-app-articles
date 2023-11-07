import { memo } from 'react';
import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button onClick={toggle} theme={ButtonTheme.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});
