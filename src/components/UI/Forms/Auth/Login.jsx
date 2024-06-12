import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import style from './Login.module.css'
import {getAdmin, setToken} from "../../../../store/user";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const submit = async () => {
        try {
            const {data} = await axios.post('http://127.0.0.1:8000/api/login', {name, password})
            dispatch(setToken({token: data.token}))
            data.token && dispatch(getAdmin(data.token))
            navigate("/")
        }catch (e){
            setError(e.response.data)
        }finally {

        }
    }

    return <>
            <form onSubmit={e => e.preventDefault()}  className={style.form}>
                <div className={style.title}>
                    <h1>Авторизация</h1>
                    <div>в ваш <span>аккаунт</span></div>
                </div>
                <input
                    className={style.input}
                    type="text"
                    name={'name'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={"Имя"}
                    autoComplete={"off"}
                />
                <input
                    className={style.input}
                    type="text"
                    name={'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"Пароль"}
                    autoComplete={"off"}/>
                <button onClick={() => submit()} className={style.button}>Войти</button>
                {error && <div className={style.error}>{error && error.message}</div>}
            </form>
    </>
}

export default Login