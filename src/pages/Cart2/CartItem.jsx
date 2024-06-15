import styles from "./Cart.module.scss"
import cn from 'classnames'
import {useDispatch} from 'react-redux'
import {addCart, deleteCart, removeCart} from "../../store/cart";

const CartItem = ({cart}) => {

    const dispatch = useDispatch()

    return <div className={cn(styles.Cart__item, styles.cartItem)}>
        <div className={styles.cartItem__img}>
            <img
                src={`./books/${cart?.item?.img}`}
                alt='book'
            />
        </div>
        <div className={styles.cartItem__content}>
            <div className={styles.cartItem__info}>
                <h3>{cart?.item?.name}</h3>
                <p>Размер: {cart?.size}</p>
            </div>
            <div className={styles.cartItem__count}>
                <button onClick={() => dispatch(addCart(cart.item))}>+
                </button>
                {cart?.count}
                <button onClick={() => dispatch(deleteCart({item: cart.item}))}>-
                </button>
            </div>
            <div className={styles.cartItem__control}>
                <div className={styles.cartItem__price}>
                    <b>{cart?.count * cart?.item.price} ₽</b>
                </div>
                <div className={styles.cartItem__remove}>
                    <button
                        onClick={() => dispatch(removeCart({
                           item: cart?.item
                        }))}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem