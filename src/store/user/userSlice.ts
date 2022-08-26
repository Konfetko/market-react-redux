import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IUserState} from "../../models/IUserState";
import {IAdress, IAdressAdd, IAdressChange} from "../../models/IAdress";

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
            state.user = {...state.user,details: {countOrders: 0,adresses:[]}}
        },
        logout(state){
            localStorage.clear()
        },
        addAddress(state,action:PayloadAction<IAdressAdd>){
            if(!state.user.details) return state
            if(state.user.details.adresses.length>=3) return

            const address:IAdress = {idAdress:new Date().getDate()+Math.random(),...action.payload}

            state.user.details.adresses.push(address)
            console.log(state.user.details.adresses)
        },
        removeAddress(state,action:PayloadAction<number>){
            if(state.user.details===undefined) return state

            state
                .user
                .details
                .adresses =
                state.user.details.adresses.filter(x=>x.idAdress!==action.payload)

            //TODO DB DELETE
        },
        changeDataAddress(state,action:PayloadAction<IAdressChange>){
            if(!state.user.details) return state

            let address = state.user.details.adresses.find(x=>x.idAdress===action.payload.sourceAdress.idAdress)
            if(!address) return

            address.city = action.payload.changedAdress.city
            address.house = action.payload.changedAdress.house
            address.street = action.payload.changedAdress.street
            address.flatNumber = action.payload.changedAdress.flatNumber


        }


    }
})
export const {authorization,registration,logout,addAddress,removeAddress,changeDataAddress} = userSlice.actions

export const getUserState=(state:RootState)=>state.user

export default userSlice.reducer