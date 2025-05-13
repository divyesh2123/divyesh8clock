import { configureStore } from '@reduxjs/toolkit'
import counterInfo  from '../slice/counter.slice'
import userInfo  from '../slice/userslice';
import postInfo from '../slice/postslice';
import postslice from '../slice/postslice';
const store=configureStore({
    reducer: {

        counter: counterInfo,
        user:userInfo,
        post: postslice
    }
});

export default store;