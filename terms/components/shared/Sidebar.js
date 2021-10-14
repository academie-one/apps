import React, {memo} from 'react';
import styles from '../../styles/components/shared/Sidebar.module.css';

const Sidebar = ({classes}) => {
  const [glowing, setGlowing] = React.useState(true);

  const applyHovered = {
    boxShadow: '0px 0px 300px rgba(195, 218, 231, 1)',
    transition: 'box-shadow 0.5s ease-in-out',
  };
  const applyUnhovered = {
    transition: 'box-shadow 0.5s ease-in-out',
  };

  return (
    <aside className={classes}>
      <nav
        style={glowing ? applyHovered : applyUnhovered}
        className={`${styles.nav} bg-white dark:bg-black`}
      />
    </aside>
  );
};

export default memo(Sidebar);
