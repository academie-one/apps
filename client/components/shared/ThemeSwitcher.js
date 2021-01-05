import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

const themeSwitcher = ({navOpen}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleMode = () => {
    localStorage.theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`text-h4 md:text-h3 ${navOpen ? 'invisible' : ''}`}>
      <button onClick={toggleMode} className={`focus:outline-none`}>
        {theme === 'dark' ? '🌝' : '🌚'}
      </button>
    </div>
  );
};

export default themeSwitcher;
