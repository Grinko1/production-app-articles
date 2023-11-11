import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [])}></div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
