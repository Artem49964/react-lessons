import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const initialState = {
    cars:[
        {id:0, name:'max'},
        {id:1, name:'max'},
        {id:2, name:'max'}
    ]
}


const userSlice = createSlice({
    name:'userSlice',
    initialState
})

const userReducer = userSlice.reducer

export {
    userReducer
}