import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink to={AppRoutes.MAIN} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
