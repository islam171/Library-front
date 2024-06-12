import Login from "../../components/UI/Forms/Auth/Login";
import style from './Auth.module.css'
import {Route, Routes} from "react-router-dom";
import Register from "../../components/UI/Forms/Auth/Register";

const Auth = () => {
    return <div className={style.Auth}>
        <Routes>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"register"} element={<Register/>}/>
        </Routes>

    </div>
}

export default Auth