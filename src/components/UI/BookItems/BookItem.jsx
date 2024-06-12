import style from './BookItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addMyBook, deleteMyBook} from "../../../store/book";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const BookItem = ({book}) => {

    const dispatch = useDispatch()
    const {myBooks} = useSelector(state => state.book)
    const {token} = useSelector(state => state.user)
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(myBooks.filter(item => item.id === book.id))
    }, [myBooks]);


    const navigate = useNavigate()

    return <div className={style.BookItem}>
        <div className={style.top}>
            <div className={style.img}>
                <img src={`http://127.0.0.1:8000/storage/${book.image}`} alt="" />
            </div>
        </div>
        <div className={style.bottom}>
            <h2>{book.name}</h2>
            <button
                onClick={() => (token ? (
                    books.length > 0 ?
                    dispatch(deleteMyBook({token, id: book.id})) :
                    dispatch(addMyBook({token, book}))) : (navigate('/auth/login')))}>
                {books.length > 0 ? <>Удалить</> : <>Добавить</>}
            </button>
        </div>

    </div>
}

export default BookItem