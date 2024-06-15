import { createSlice } from '@reduxjs/toolkit'
import { genresData, booksData } from './booksData'

const textSimilarity = (text, string) => {
    return string.toLowerCase().includes(text)
}
const filterByGenre = (array, genre) => {
    if (!genre) {
        return array
    }
    return array.filter(item => item.genre === genre)
}

const filterByPrice = (array, priceMax, priceMin) => {
    if (!(priceMax || priceMin) || priceMax === '0') {
        return array
    }
    return array.filter(item => item.price >= priceMin && item.price <= priceMax)
}

const filterByColor = (array, color) => {
    if (!color) {
        return array
    }

    return array.filter(item => item.color === color)
}

const sortShoes = (array, sortValue, order) => {
    const sortByName = (a, b) => {
        if (a.name > b.name) {
            return order === 'desc' ? -1 : 1
        }
        if (a.name < b.name) {
            return order === 'desc' ? 1 : -1
        }
        return 0
    }

    const sortByPrice = (a, b) => {
        if (a.price > b.price) {
            return order === 'desc' ? -1 : 1
        }
        if (a.price < b.price) {
            return order === 'desc' ? 1 : -1
        }
        return 0
    }

    if (sortValue === 'price') {
        return array.sort((a, b) => sortByPrice(a, b))
    }
    return array.sort((a, b) => sortByName(a, b))
}

const pagination = (array, page, limit) => {
    let start = page * limit - limit
    let end = start + limit

    return array.slice(start, end)
}

const book = createSlice({
    name: 'book',
    initialState: {
        books: booksData,
        genres: genresData,
        error: null,
        status: null,
        totalCount: 0,
    },
    reducers: {
        getShoes(state, action) {
            let dataFilter
            dataFilter = booksData.filter(item =>
                textSimilarity(action.payload.search, item.name)
            )
            dataFilter = filterByGenre(dataFilter, action.payload.genre)
            dataFilter = filterByPrice(
                dataFilter,
                action.payload.priceMax,
                action.payload.priceMin
            )
            dataFilter = filterByColor(dataFilter, action.payload.color)
            dataFilter = sortShoes(
                dataFilter,
                action.payload.sort,
                action.payload.order
            )
            state.totalCount = dataFilter.length
            dataFilter = pagination(
                dataFilter,
                action.payload.page,
                action.payload.limit
            )
            state.books = dataFilter
        },
    },
})
export const { getShoes } = book.actions
export default book.reducer
