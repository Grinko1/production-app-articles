import { type ReactNode, useState, useRef, useEffect, useCallback } from 'react';
import cls from './Modal.module.scss';
import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

const ANIMATION_DELAY = 300;
interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen = false, lazy, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);
  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
