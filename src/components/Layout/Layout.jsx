import style from './Layout.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

const Layout = () =>{

    return <div className={style.Layout}>
        <div className={style.wrapper}>
            <Header/>
            <div className={style.main}>
                <Outlet/>
            </div>
        </div>
    </div>
}

export default Layout