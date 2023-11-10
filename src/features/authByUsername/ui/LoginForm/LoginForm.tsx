import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getError, getIsLoading, getPassword, getUsername } from '../../model/selectors/getLoginData/getLoginData';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer
};
const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (newValue: string) => {
      dispatch(loginActions.setUsername(newValue));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (newValue: string) => {
      dispatch(loginActions.setPassword(newValue));
    },
    [dispatch]
  );
  const onLogin = useCallback(() => {
    if (username !== '' && password !== '') {
      // @ts-expect-error fdfdksf
      dispatch(loginByUsername({ username, password }));
    }
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text theme={TextTheme.ERROR} text={error} />}
        <Input placeholder={t('Логин')} value={username} onChange={onChangeUsername} autoFocus className={cls.input} />
        <Input placeholder={t('Пароль')} value={password} onChange={onChangePassword} className={cls.input} />
        <Button disabled={isLoading} className={cls.loginBtn} onClick={onLogin}>
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
