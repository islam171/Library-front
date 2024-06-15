import BookItem2 from "../../components/UI/BookItems/BookItem2";
import {useSelector} from "react-redux";
import styles from "./MyBook.module.css"

const MyBook = () => {

    const {items} = useSelector(state => state.myBook)
    console.log(items)

    return <div>
        <h1>Мои книги</h1>
        <div className={styles.BookList}>
            {items && items.map(book => <BookItem2 book={book} key={book.id}/>)}
        </div>

    </div>
}

export default MyBook
