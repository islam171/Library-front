import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getAdmin = createAsyncThunk(
    'user/getAdmin',
    async function (token, {rejectWithValue}) {
        try {
            const {data} = await axios.get(
                'http://127.0.0.1:8000/api/admin',
                {headers: {'Authorization': token}})
            return data;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const blockUser = createAsyncThunk(
    'user/blockUser',
    async function ({token, id}, {rejectWithValue}) {
        try {
            const {data} = await axios.post(
                `http://127.0.0.1:8000/api/admin/block`,
                {'id': id},
                {headers: {'Authorization': token}})
            return {id};
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const unlockUser = createAsyncThunk(
    'user/unlockUser',
    async function ({token, id}, {rejectWithValue}) {
        try {
            const {data} = await axios.post(
                `http://127.0.0.1:8000/api/admin/unlock`,
                {id},
                {headers: {'Authorization': token}})
            return {id}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getUserBlock = createAsyncThunk(
    'user/getUsersBlock',
    async function (token, {rejectWithValue}) {
        try {
            const {data} = await axios.get(
                `http://127.0.0.1:8000/api/admin/block/users`,
                {headers: {'Authorization': token}})
            return data

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)




const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        token: "",
        status: false,
        error: null,
        isAdmin: false,
        blockUser: [],
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload.token
        },
        logout(state, action){
            state.token = ""
            state.user = null
        }
    },
    extraReducers: {
        [getAdmin.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAdmin.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.isAdmin = action.payload.status == 0 ? false : true
        },
        [getAdmin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [blockUser.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [blockUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;

            for(let i =0; i < state.blockUser.length; i++){
                if(state.blockUser[i].user.id === action.payload.id){
                    state.blockUser[i].block = true
                }
            }
        },
        [blockUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [unlockUser.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [unlockUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            for(let i =0; i < state.blockUser.length; i++){
                if(state.blockUser[i].user.id === action.payload.id){
                    state.blockUser[i].block = false
                }
            }
        },
        [unlockUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [getUserBlock.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [getUserBlock.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.error = null;
            state.blockUser = action.payload;
        },
        [getUserBlock.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        }
    }
})

export const {setToken, logout} = userSlice.actions
export default userSlice.reducer