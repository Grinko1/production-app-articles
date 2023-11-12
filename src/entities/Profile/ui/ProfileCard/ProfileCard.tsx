import { memo } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (val: string) => void;
  onChangeFirstname?: (val: string) => void;
}

export const ProfileCard = memo((props: ProfileProps) => {
  const { className, data, isLoading, error, readonly, onChangeFirstname, onChangeLastname } = props;

  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(cls.Profile, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(cls.Profile, {}, [className, cls.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }
  return (
    <div className={classNames(cls.Profile, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
      </div>
    </div>
  );
});
