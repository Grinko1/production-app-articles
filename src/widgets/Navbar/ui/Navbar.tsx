import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal, loginActions } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useSelector(getAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logout());
    dispatch(loginActions.resetData());
  }, [dispatch]);
  if (userData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={logoutHandler}>
          {t('Выйти')}
        </Button>
      </header>
    );
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
    </header>
  );
};
