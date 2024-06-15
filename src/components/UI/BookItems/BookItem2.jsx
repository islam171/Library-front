import styles from "./BookItem2.module.css"
import {useDispatch, useSelector} from "react-redux";
import style from "./BookItem.module.css";
import {toggleMyBook} from "../../../store/mybook";
import {IoMdHeart} from "react-icons/io";

const BookItem2 = ({book}) => {

    const dispatch = useDispatch()

    const {items} = useSelector(state => state.myBook)
    const isMyBook = !!items.find(obj => obj.id === book.id)

    return <div className={styles.BookItem2}>
        <div className={styles.top}>
            <div className={style.like} onClick={() => dispatch(toggleMyBook(book))}>{isMyBook ? <IoMdHeart color={"red"}/> : <IoMdHeart/>}</div>
            <img src={`./books/${book.img}`} alt=""/>
            <div className={styles.iconPlus}>
                <span className={styles.icon}></span>
                <span className={styles.icon2}></span>
            </div>
        </div>
        <div className={styles.bottom}>
            <div>{book.name}</div>
            {/*<button*/}
            {/*    onClick={() => (dispatch(deleteMyBook({token, id: book.id})))}>*/}
            {/*    Удалить*/}
            {/*</button>*/}
        </div>
    </div>
}

export default BookItem2