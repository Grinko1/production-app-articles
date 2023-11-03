import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from './providers/themeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>
      <button onClick={toggleTheme}>Toggle</button>

      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
