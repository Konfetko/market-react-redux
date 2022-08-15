import {IUserState} from "../../models/IUserState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

const initialState:IUserState={
    id:-1,
    login:'',
    password:'',
    email:''
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        authorization(state,action:PayloadAction<IUserState>){
            //TODO axios get login
            state.login=action.payload.login
            state.password=action.payload.password
            state.email=''
        },
        registration(state,action:PayloadAction<IUserState>){
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