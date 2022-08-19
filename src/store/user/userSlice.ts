import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

const initialState:IUser={
    id:-1,
    login:'',
    password:'',
    email:''
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        authorization(state,action:PayloadAction<IUser>){
            //TODO axios get login
            state.login=action.payload.login
            state.password=action.payload.password
            state.email=''
        },
        registration(state,action:PayloadAction<IUser>){
            //TODO axios get registration
            state = action.payload
        },
        logout(state){
            state.email=''
            state.login=''
            state.password=''
        }
    }
})
export const {authorization,registration,logout} = userSlice.actions

export const getUserState=(state:RootState)=>state.user

export default userSlice.reducer