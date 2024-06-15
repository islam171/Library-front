import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        error: null,
        status: null,
        totalCount: 0,
        totalPrice: 0
    },
    reducers: {
        addCart: (state, action) => {
            const findItem = state.carts.find(item => (item.id === action.payload.id))

            if(findItem){
                findItem.count++
            }else{
                state.carts = [...state.carts, {id: action.payload.id, item: action.payload, count: 1}]
            }
            state.totalPrice = state.carts.reduce((sum, obj) => {
                return (obj.item.price * obj.count) + sum
            }, 0)
            state.totalCount= state.carts.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },
        deleteCart: (state, action) => {
            const findItem = state.carts.find(item => (item.id === action.payload.item.id))
            if(findItem){
                if(findItem.count > 1){
                    findItem.count--
                }else{
                    state.carts = state.carts.filter(item => (item.id !== action.payload.item.id))
                }
            }
            state.totalPrice = state.carts.reduce((sum, obj) => {
                return (obj.item.price * obj.count) + sum
            }, 0)
            state.totalCount= state.carts.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },
        removeCart: (state, action) => {
            state.carts = state.carts.filter(item => (item.id !== action.payload.item.id))
            state.totalPrice = state.carts.reduce((sum, obj) => {
                return (obj.item.price * obj.count) + sum
            }, 0)
            state.totalCount= state.carts.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },
        clearCart: (state) => {
            state.carts = []
            state.totalCount = 0
            state.totalPrice = 0
        }
    },
})
export const {addCart, deleteCart, removeCart, clearCart} = cartSlice.actions
export default cartSlice.reducer
