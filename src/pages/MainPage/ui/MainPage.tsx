/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div>
      <button onClick={toggle}>tr</button>
      {t('Тестовый пример')}
      <hr />
      {t('Главная страница')}
      <form action="">
        <input type="text" />
        <div></div>
        <span>sdsdfsdf</span>
        <div>test</div>
      </form>
    </div>
  );
};

export default MainPage;
