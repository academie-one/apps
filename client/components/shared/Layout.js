import Head from "./HeadMeta";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "../../styles/components/shared/Layout.module.css";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <Header classes={styles.header} />
      <div className={styles.container}>
        <Sidebar classes={styles.sidebar} />
        <main className={styles.main}>
          <div className={styles.tmpContainer}>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
