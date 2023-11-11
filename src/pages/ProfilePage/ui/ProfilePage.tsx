import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(getAuthData);

  useEffect(() => {
    if (user) {
      // @ts-expect-error fix
      dispatch(fetchProfileData(user.id || '1'));
    }
  }, [dispatch, user]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
