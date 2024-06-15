import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getShoes} from "../../store/book";

export const useGetShoesByFilter = () =>{

    const location = useLocation()
    const dispatch = useDispatch()

    const queryParams = new URLSearchParams(location.search)

    const search = queryParams.get('search') || ''
    const order = queryParams.get('order') || ''
    const sort = queryParams.get('sort') || ''
    const color = queryParams.get('color') || ''
    const page = queryParams.get('page') || 1
    const limit = 6
    const priceMax = queryParams.get('maxPrice') || 0
    const priceMin = queryParams.get('minPrice') || 0
    const genre = queryParams.get('genre') || ''

    useEffect(() => {
        dispatch(getShoes({page, limit, sort, order, color, search, priceMax, priceMin, genre}))
    }, [page, limit, sort, order, color, search, priceMax, priceMin, genre, dispatch])
}