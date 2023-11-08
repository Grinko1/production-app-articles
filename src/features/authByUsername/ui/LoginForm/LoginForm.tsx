import { memo, useCallback, useState } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const onChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Логин')} value={value} onChange={onChange} autoFocus className={cls.input} />
      <Input placeholder={t('Пароль')} className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
});
