import styles from "./Cart.module.scss"
import * as MaterialIcon from 'react-icons/md'
import { Link } from 'react-router-dom'

const CartLoading = () => {
    return <div className={styles.Cart}>
        <div className={styles.Cart__container}>
            <div className={styles.Cart__top}>
                <h2 className={styles.Cart__title}>
                    <MaterialIcon.MdShoppingCart />
                    Корзина
                </h2>
                <div className={styles.Cart__clear}>
                    <MaterialIcon.MdOutlineDelete />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className={styles.Cart__empty}>
                <h2>Загрузка . . .</h2>
                <p>Подождите загружаем корзину</p>
                <div></div>
                <Link to={'/'} className='button button--black'>
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    </div>
}

export default CartLoading