import style from './Layout.module.css'
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import {useGetShoesByFilter} from "../hooks/useFilter";

const Layout = ({children}) =>{

    useGetShoesByFilter()

    return <div className={style.Layout}>
        <div className={style.wrapper}>
            <Header/>
            <div className={style.main}>
                {children}
            </div>
        </div>
    </div>
}

export default Layout