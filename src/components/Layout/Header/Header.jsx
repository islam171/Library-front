import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/user";

const Header = () => {

    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return <>
        <div className={styles.Header}>
            <Link to={"/"} className={styles.title}>Library</Link>
            <ul>
                {token ? <Link to={"/book"} className={styles.button}>Мои книги</Link> :
                    <>
                        <Link to={"/auth/login"} className={styles.button}>Войти</Link>
                        <Link to={"/auth/register"} className={styles.button}>Регистрация</Link>
                    </>
                }
                {token && <button onClick={() => dispatch(logout())}>Выйти</button>}
            </ul>
        </div>
    </>
}

export default Header