import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(getAuthData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const dataForm = useSelector(getProfileForm);
  const readonly = useSelector(getProfileReadonly);
  useEffect(() => {
    if (user) {
      dispatch(fetchProfileData(user.id || '1'));
    }
  }, [dispatch, user]);
  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );
  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [])}>
        <ProfilePageHeader />
        <ProfileCard
          data={dataForm}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
