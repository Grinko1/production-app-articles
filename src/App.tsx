import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>
      <button onClick={toggleTheme}>Toggle</button>

      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
