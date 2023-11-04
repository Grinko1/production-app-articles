import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('MainPage')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          {t('AboutPage')}
        </AppLink>
      </div>
    </div>
  );
};
