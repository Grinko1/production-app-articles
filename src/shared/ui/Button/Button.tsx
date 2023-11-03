import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?:ButtonTheme;
  size?:ButtonSize
}

export const Button = memo((props: ButtonProps) => {
  const { className, children,theme=ButtonTheme.OUTLINE, size= ButtonSize.M, ...otherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])} {...otherProps}>
      {children}
    </button>
  );
});
