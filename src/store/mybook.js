import { createSlice } from '@reduxjs/toolkit'

const myBookSlice = createSlice({
    name: 'myBook',
    initialState: {
        items: [],
        error: null,
        status: null,
        totalCount: 0
    },
    reducers: {
        toggleMyBook: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if(findItem){
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }else{
                state.items = [...state.items, action.payload]
            }
            state.totalCount= state.items.length
        },
        clearMyBook: (state) => {
            state.items = []
            state.totalCount = 0
        }
    },
})

export const {toggleMyBook, clearMyBook} = myBookSlice.actions

export default myBookSlice.reducer
