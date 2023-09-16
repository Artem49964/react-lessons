import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";
import carReducer from "./slices/car.slice";

const store = configureStore({
    reducer:{
        user:userReducer,
        car:carReducer
    }
})

export {
    store
}