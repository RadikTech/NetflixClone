import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import loadingSlice from './loadingSlice';

const authStore = configureStore({
    reducer: {
        auth: authSlice,
        loading: loadingSlice,
    }
});


export default authStore;