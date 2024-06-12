import styles from './AdminBookItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from "../../../store/book";

const AdminBookItem = ({book}) => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)

    return <div className={styles.BookItem}>
        <div>{book.name}</div>
        <div className={styles.control}>
            <button onClick={() => dispatch(deleteBook({id: book.id, token}))}>Удалить</button>
        </div>
    </div>
}

export default AdminBookItem