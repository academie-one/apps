import React, {useEffect} from 'react';

const DarkModeToggle = ({darkMode, setDarkMode, navOpen}) => {
  const toggleMode = () => {
    localStorage.theme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
      setDarkMode(true);
    } else {
      document.querySelector('html').classList.remove('dark');
      setDarkMode(false);
    }
  }, [darkMode]);

  return (
    <div className={`text-h4 md:text-h3 ${navOpen ? 'invisible' : ''}`}>
      <button onClick={toggleMode} className={`focus:outline-none`}>
        {darkMode ? '🌝' : '🌚'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
