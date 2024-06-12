import styles from './UserItems.module.css'
import {blockUser, unlockUser} from "../../../store/user";
import {useDispatch} from "react-redux";

const UserItems = ({user, token, block}) => {

    const dispatch = useDispatch()

    return <div className={styles.UserItem}>
        <div>{user.name}</div>
        <div>
            <button
                onClick={() => dispatch(
                    !block ? blockUser({token, id: user.id}) :
                        unlockUser({token, id: user.id})
                    )}>{!block ? <div>Блокировать</div> : <div>Разблокировать</div>}</button>
        </div>
    </div>
}

export default UserItems