import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Server error')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchUserId = createAsyncThunk(
    'users/fetchUserId',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Server error')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: null,
        status: null,
        error: null
    },
    redusers: {},
    extraReducers: {
        [fetchUsers.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUsers.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.users = action.payload;
        },
        [fetchUsers.rejected] : (state, action) => {
            state.status = 'rejected';
            state.users = action.payload;
        },
        [fetchUserId.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUserId.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.user = action.payload;
        },
        [fetchUserId.rejected] : (state, action) => {
            state.status = 'rejected';
            state.user = action.payload;
        },
    }
})

export default usersSlice.reducer;