import BookItem2 from "../../components/UI/BookItems/BookItem2";
import {useSelector} from "react-redux";
import styles from "./MyBook.module.css"

const MyBook = () => {

    const {token} = useSelector(state => state.user)
    const {myBooks} = useSelector(state => state.book)

    if(!token){
        return <h1>Не найдено</h1>
    }

    return <div>
        <h1>Мои книги</h1>
        <div className={styles.BookList}>
            {myBooks && myBooks.map(book => <BookItem2 book={book} key={book.id}/>)}
        </div>

    </div>
}

export default MyBook
