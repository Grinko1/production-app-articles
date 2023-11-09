import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/authByUsername/model/slice/loginSlice';
import {
  getError,
  getIsLoading,
  getPassword,
  getUsername
} from 'features/authByUsername/model/selectors/getLoginData/getLoginData';
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
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
      // @ts-expect-error
      dispatch(loginByUsername({ username, password }));
    }
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input placeholder={t('Логин')} value={username} onChange={onChangeUsername} autoFocus className={cls.input} />
      <Input placeholder={t('Пароль')} value={password} onChange={onChangePassword} className={cls.input} />
      <Button disabled={isLoading} className={cls.loginBtn} onClick={onLogin}>
        {t('Войти')}
      </Button>
    </div>
  );
});
