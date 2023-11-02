import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>

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
