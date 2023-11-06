/* eslint-disable i18next/no-literal-string */
import { memo, useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'; import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapset] = useState(false);
  const onToggle = (): void => {
    setCollapset((prev) => !prev);
  };
  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button data-testid='sidebar-toggle' onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
});
