import style from './Home.module.css'
import BookItem from "../../components/UI/BookItems/BookItem";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Home = () => {

    const {books, status, error} = useSelector(state => state.book)
    const {isAdmin} = useSelector(state => state.user)

    return <div className={style.Home}>
        <h1>Список книг</h1>
        <div className={style.books}>
            {status !== 'loading' ? (books.map(book =>
                <BookItem book={book} key={book.id}/>
            )) : <div>Loading...</div>}
        </div>

        {isAdmin && (
            <div className={style.nav}>
                <Link to={"/admin/books"}><button>Книги</button></Link>
                <Link to={"/admin"}><button>Пользователи</button></Link>
            </div>
        )}


        {error && (error.status === 3) && <div className={style.modal}>{error.message}</div>}

    </div>
}

export default Home