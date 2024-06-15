import {Link} from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {


    return <>
        <div className={styles.Header}>
            <Link to={"/"} className={styles.title}>Library</Link>
            <ul>
                <Link to={"/myBook"} className={styles.button}>Мои книги</Link>
                <Link to={"/cart"} className={styles.button}>Корзина</Link>
            </ul>
        </div>
    </>
}

export default Header