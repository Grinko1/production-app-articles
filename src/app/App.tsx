import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from './providers/themeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>MainPage</Link>
      <Link to={'/about'}>AboutPage</Link>
      <button onClick={toggleTheme}>Toggle</button>

      <AppRouter />
    </div>
  );
};

export default App;
