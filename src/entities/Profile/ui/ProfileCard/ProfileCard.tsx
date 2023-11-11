import { memo } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading
} from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileProps {
  className?: string;
}

export const ProfileCard = memo((props: ProfileProps) => {
  const { className } = props;
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  console.log(data, isLoading, error);
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Profile, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
      </div>
    </div>
  );
});
