import {useLocation, useNavigate} from "react-router-dom";

const useQueryParams = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const priceMax = queryParams.get('maxPrice') || 0
    const priceMin = queryParams.get('minPrice') || 0
    const genresParams = queryParams.get('genre') || ''
    const sortParams = queryParams.get('sort') || ''
    const orderParams = queryParams.get('order') || 'desc'
    const searchParams = queryParams.get('search') || ''
    const limit = 6

    const setPrice = (price) => {
        if (price.priceMin !== undefined && price.priceMin !== null) {
            queryParams.set('minPrice', String(price.priceMin));
        } else {
            queryParams.delete('minPrice');
        }

        if (price.priceMax !== undefined && price.priceMax !== null) {
            queryParams.set('maxPrice', String(price.priceMax));
        } else {
            queryParams.delete('maxPrice');
        }
        navigate({ search: queryParams.toString() });
    }

    const setGenresParams = item => {
        if (item) {
            queryParams.set('genre', item);
        } else {
            queryParams.delete('genre');
        }
        queryParams.set('page', 1);
        navigate({ search: queryParams.toString() });
    }

    const setSortParams = (item) => {
        queryParams.set('sort', item)
        navigate({search: queryParams.toString()})
    }

    const toggleOrderParams = () => {
        queryParams.set('order', orderParams === 'desc' ? 'asc' : 'desc')
        navigate({search: queryParams.toString()})
    }

    const setSearchParams = (search) => {
        if (search) {
            queryParams.set('search', search);
        } else {
            queryParams.delete('search');
        }
        navigate({ search: queryParams.toString() });
    }




    return {
        priceMax,
        priceMin,
        setPrice,
        genresParams,
        setGenresParams,
        sortParams,
        setSortParams,
        orderParams,
        toggleOrderParams,
        searchParams,
        setSearchParams,
        limit
    }
}

export default useQueryParams