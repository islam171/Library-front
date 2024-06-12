import {useDispatch, useSelector} from "react-redux";
import AdminBookItem from "../../../components/UI/AdminBookItem/AdminBookItem";
import {useState} from "react";
import {createBook} from "../../../store/book";
import styles from './Books.module.css'

const AdminBooks = () => {

    const {books} = useSelector(state => state.book)
    const {token} = useSelector(state => state.user)

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    const submit = () => {

        dispatch(createBook({
            token,
            data: {
                name,
                desc,
                image
            }
        }))
    }

    return <div className={styles.Books}>
        <h1>Книги</h1>

        <div className={styles.form}>
            <input
                type="text"
                placeholder={"Имя"}
                name={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder={"Описание"}
                name={'desc'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <input type="file" onChange={e => setImage(e.target.files[0])}/>
            <button onClick={() => submit()}>Добавить</button>
        </div>


        <div className={styles.BookList}>
            {books.map(book => <AdminBookItem book={book} key={book.id}/>)}
        </div>

    </div>
}

export default AdminBooks