import appReducer from './reducers/app';
import { configureStore } from '@reduxjs/toolkit'
// Add reducers here!
export default configureStore({
    reducer: {
        app: appReducer,
    },
});