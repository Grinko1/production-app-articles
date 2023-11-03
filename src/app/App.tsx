import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/themeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>

      <button onClick={toggleTheme}>Toggle</button>

      <AppRouter />
    </div>
  );
};

export default App;
