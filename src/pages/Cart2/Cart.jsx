import styles from './Cart.module.scss'
import cn from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import CartItem from './CartItem.jsx'
import {clearCart} from "../../store/cart";


const Cart = () => {
    const dispatch = useDispatch()

    const {carts, status, totalPrice, totalCount} = useSelector(state => state.cart)

    if (status === 'loading') return <div>Loading...</div>
    if (carts?.length === 0) return <div>Пусто</div>


    return (<div className={styles.Cart}>
        <div className={styles.Cart__cont}>
            <h2> Корзина</h2>
            <div>
                {carts && carts.map(item => <CartItem key={item.id} cart={item}/>)}
            </div>
            <div className={styles.cartBottom}>
                <div className={styles.cartBottom__details}>
						<span>
							Всего: <b>{totalCount || 0} шт.</b>
						</span>
                    <span>
							Сумма: <b>{totalPrice || 0} ₽</b>
						</span>

                    <div onClick={() => dispatch(clearCart())}>
                        <span>Очистить корзину</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Cart
