import style from './Home.module.css'
import BookItem from "../../components/UI/BookItems/BookItem";
import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../../store/cart";
import Genres from "../../components/UI/genres/Genres";

const Home = () => {

    const {books, status} = useSelector(state => state.book)

    return <div className={style.Home}>
        <h1>Список книг</h1>

        <div className={style.genres}>
            <Genres/>
        </div>
        <div className={style.books}>
            {status !== 'loading' ? (books.map(book =>
                <BookItem book={book} key={book.id} />
            )) : <div>Loading...</div>}
        </div>
    </div>
}

export default Home