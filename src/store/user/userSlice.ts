import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IUserState} from "../../models/IUserState";
import {IAdress} from "../../models/IAdress";

const initialState:IUserState = {
    user:{email:'',username:'',password:'',id:-1,fio:'',details:{countOrders:0,adresses:[]}}
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
        },
        logout(state){
            localStorage.clear()
        },
        addAdress(state,action:PayloadAction<IAdress>){
            if(state.user.details!=null)
                state.user.details.adresses.push(action.payload)
        }


    }
})
export const {authorization,registration,logout} = userSlice.actions

export const getUserState=(state:RootState)=>state.user

export default userSlice.reducer