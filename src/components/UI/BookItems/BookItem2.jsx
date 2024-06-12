import styles from "./BookItem2.module.css"
import {addMyBook, deleteMyBook} from "../../../store/book";
import {useDispatch, useSelector} from "react-redux";

const BookItem2 = ({book}) => {

    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return <div className={styles.BookItem2}>
        <div className={styles.top}>
            <div className={styles.iconPlus}>
                <span className={styles.icon}></span>
                <span className={styles.icon2}></span>
            </div>
        </div>
        <div className={styles.bottom}>
            <div>{book.name}</div>
            <button
                onClick={() => (dispatch(deleteMyBook({token, id: book.id})))}>
                Удалить
            </button>
        </div>
    </div>
}

export default BookItem2