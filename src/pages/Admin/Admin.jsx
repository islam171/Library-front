import {Route, Routes} from "react-router-dom";
import AdminBooks from "./Book/Books";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAdmin, getUserBlock, getUsers} from "../../store/user";
import UserItems from "../../components/UI/UserItems/UserItems";
import styles from "./Admin.module.css"

const Admin = () => {

    const {token, isAdmin, blockUser, status, error} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        token && dispatch(getAdmin(token))
    }, [token, dispatch]);

    useEffect(() =>{
        dispatch(getUserBlock(token))
    }, [token, dispatch])

    console.log(isAdmin)


    if(!isAdmin){
        return <>Нет доступа</>
    }

    return <>
        <Routes>
            <Route path={'books'} element={<div><AdminBooks/></div>}/>
            <Route path={'/'} element={<div>
                <div className={styles.UserList}>
                    {status !== 'loading' ? (!error ? (blockUser && blockUser.map(user =>
                        <div key={user.user.id} >
                            <UserItems user={user.user} token={token} block={user.block}/>
                        </div>
                    )) : <>Error</>) : <div>Loading...</div>}
                </div>
            </div>}/>
        </Routes>


    </>
}

export default Admin