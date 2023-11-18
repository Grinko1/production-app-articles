import { type MutableRefObject, memo, useRef, type ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Page.module.scss';
interface PageProps {
  className?: string;
  children: ReactNode;
}
export const PAGE_ID = 'PAGE_ID';
export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
    </section>
  );
});
