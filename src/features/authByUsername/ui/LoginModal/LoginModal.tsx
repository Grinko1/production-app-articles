import { Suspense, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal className={classNames('LoginModal', {}, [className])} onClose={onClose} isOpen={isOpen} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
