import {ICart} from "../../models/ICart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IProduct} from "../../models/IProduct";

const initialState:ICart = {
    products:[],
    totalPrice:0
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action:PayloadAction<IProduct>){
            state.products.push(action.payload)
        }
    }
})

export const getCartState = (state:RootState)=>state.cart
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer