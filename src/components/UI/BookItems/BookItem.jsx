import style from './BookItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { IoMdHeart } from "react-icons/io";
import {toggleMyBook} from "../../../store/mybook";
import { IoMdHeartEmpty } from "react-icons/io";
import {addCart} from "../../../store/cart";

const BookItem = ({book}) => {

    const {items} = useSelector(state => state.myBook)
    const [books, setBooks] = useState([])
    const dispatch = useDispatch()
    const isMyBook = !!items.find(obj => obj.id === book.id)

    const navigate = useNavigate()

    return <div className={style.BookItem}>
        <div className={style.like} onClick={() => dispatch(toggleMyBook(book))}>{isMyBook ? <IoMdHeart color={"red"}/> : <IoMdHeart/>}</div>
        <div className={style.top}>
            <div className={style.img}>
                <img src={`./books/${book.img}`} alt="" />
            </div>
        </div>
        <div className={style.bottom}>
            <h2>{book.name}</h2>
            <button
                onClick={() => dispatch(addCart(book))}
            >
                {books.length > 0 ? <>Удалить</> : <>Добавить</>}
            </button>
        </div>

    </div>
}

export default BookItem