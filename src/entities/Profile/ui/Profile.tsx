import { memo } from 'react';
import cls from './Profile.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfileProps {
  className?: string;
}

export const Profile = memo((props: ProfileProps) => {
  const { className } = props;
  return <div className={classNames(cls.Profile, {}, [className])}></div>;
});
