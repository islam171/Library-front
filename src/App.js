import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import MyBook from "./pages/MyBook/MyBook";
import {useEffect} from "react";
import {getBooks, getMyBook} from "./store/book";
import {useDispatch, useSelector} from "react-redux";
import Admin from "./pages/Admin/Admin";

const route = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route index element={<div><Home/></div>}/>
        <Route path={"auth/*"} element={<div><Auth/></div>}/>
        <Route path={"book"} element={<div><MyBook/></div>}/>
        <Route path={"admin/*"} element={<div><Admin/></div>}/>
    </Route>
))


function App() {
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.user)

    useEffect(() => {
        token && dispatch(getMyBook(token))
    }, [token, dispatch]);

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);

    return (
        <div className="App">
            <RouterProvider router={route}/>
        </div>
    );
}

export default App;
