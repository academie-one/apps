import React, { useContext } from 'react';
import styles from '../../styles/components/Academie/InfiniteSlider.module.css';
import ThemeContext from '../shared/ThemeContext';

const Carousel = ({ items }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = localStorage.getItem('theme')

  return (
    <div
      className={`${styles.slider} ${theme === 'dark' ? styles.sliderDark : styles.sliderWhite
        }`}
    >
      <div className={styles.slideTrack}>
        {[0, 1].map((it) =>
          items.map((item) => (
            <img
              key={item.img.concat(' ', it)}
              src={item.img}
              className={styles.companyLogo}
              alt={item.imgAlt}
              id={localStorage.getItem('theme') === 'dark' ? styles.whiteLogo : null}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default Carousel;
