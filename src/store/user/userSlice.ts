import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IUserState} from "../../models/IUserState";

const initialState:IUserState = {
    user:{email:'',username:'',password:'',id:-1}
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        authorization(state,action:PayloadAction<IUser>){
            //TODO axios get login
            state.user=action.payload
        },
        registration(state,action:PayloadAction<IUser>){
            //TODO axios get registration
            state.user = action.payload
            alert(state.user)
        },
        logout(state){
            state.user.email=''
            state.user.username=''
            state.user.password=''
        }
    }
})
export const {authorization,registration,logout} = userSlice.actions

export const getUserState=(state:RootState)=>state.user

export default userSlice.reducer