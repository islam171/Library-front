import {
    createBrowserRouter,
    createRoutesFromElements,
    HashRouter,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MyBook from "./pages/MyBook/MyBook";
import Cart from "./pages/Cart2/Cart";


function App() {

    return (
        <div className="App">
            <HashRouter>
                <Layout>
                    <Routes>
                        <Route index element={<div><Home/></div>}/>
                        <Route path={"myBook"} element={<div><MyBook/></div>}/>
                        <Route path={"cart"} element={<div><Cart/></div>}/>
                    </Routes>
                </Layout>
            </HashRouter>
        </div>
    );
}

export default App;
