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
import { type Currency } from 'entities/Currency/model/types/currency';
import { type Country } from 'entities/Country';
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
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
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
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
