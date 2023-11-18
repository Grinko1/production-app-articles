/* eslint-disable i18next/no-literal-string */
import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Page>
      <button onClick={toggle}>tr</button>
      {t('Тестовый пример')}
      <hr />
      {t('Главная страница')}
      <form action="">
        <input type="text" />
        <div>New main text</div>
        <h2>counter</h2>
        <Counter />
      </form>
    </Page>
  );
};

export default memo(MainPage);
