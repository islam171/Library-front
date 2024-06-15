import styles from './Genres.module.scss'
import cn from 'classnames'
import useParams from "../../hooks/useParams";
import {genresData} from "../../../store/booksData";

const Genres = () => {

    const {genresParams, setGenresParams} = useParams()


    return (<div className={styles.Genres}>
        <ul className={styles.Genres__list}>
            <li
                className={cn(styles.Genres__item, '' === genresParams || !genresParams ? styles.active : '')}
                onClick={() => setGenresParams('')}>Все
            </li>
            {genresData && genresData.map(item => (<li
                key={item.slug}
                className={cn(styles.Genres__item, genresParams === item.slug ? styles.active : '')}
                onClick={() => setGenresParams(item.slug)}>{item.name}
            </li>))}
        </ul>
    </div>)
}

export default Genres
