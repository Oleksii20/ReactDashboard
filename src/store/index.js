import {configureStore} from '@reduxjs/toolkit';
import usersReduser from './userSlice'

export default configureStore ({
    reducer: {
        users : usersReduser
    }
})