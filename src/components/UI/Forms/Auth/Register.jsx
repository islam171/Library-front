import style from "./Register.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const submit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/register', {name, password})
        }catch (e){
            console.log(e)
        }finally {
            navigate("/auth/login")
        }
    }

    return <>
        <form onSubmit={e => e.preventDefault()}  className={style.form}>
            <div className={style.title}>
                <h1>Регистрация</h1>
            </div>

            {/*<label htmlFor="name">Имя</label>*/}
            <input
                className={style.input}
                type="text"
                name={'name'}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"Имя"}/>
            {/*<label htmlFor="password">Пароль</label>*/}

            <input
                className={style.input}
                type="text"
                name={'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={"Пароль"}/>
            <button onClick={() => submit()} className={style.button}>Заригистрироватся</button>
        </form>
    </>
}

export default Register