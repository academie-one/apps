import styles from "../../styles/components/shared/Layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
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
