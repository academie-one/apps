import React from "react";
import Typography from "../shared/Typography";

import styles from '../../styles/components/Home/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h2"> Пользовательское</Typography>
            <Typography variant="h2"> соглашение </Typography>
        </div>
    );
}

export default HomePage;