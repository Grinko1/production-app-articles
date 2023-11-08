import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal onClose={onToggleModal} isOpen={isAuthModal}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi pariatur animi cum velit aut molestias repellat
        sint eveniet non asperiores voluptatem vitae, totam in accusamus nisi? Ipsam unde fugiat dolor consectetur animi
        dignissimos, suscipit atque assumenda odit labore ex enim tempore amet aspernatur reiciendis eius consequatur
        explicabo sunt nobis placeat!
      </Modal>
    </div>
  );
};
