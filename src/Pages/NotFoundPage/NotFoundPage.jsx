import { Link } from "react-router-dom";

import styles from "./not-found-page.module.css";

const NotFoundPage = () => {
    
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Error 404. Cannot found this page.</h1>
        <Link className={styles.link} to="/">
          To Home page
        </Link>
      </div>
    );
};



export default NotFoundPage;