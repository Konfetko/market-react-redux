import {ICart} from "../../models/ICart";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {IProduct} from "../../models/IProduct";
import {ICartItem} from "../../models/ICartItem";

function calculatePrice(state:ICart){
    if(state.products.length===0){
        state.totalPrice=0
        return
    }
    state.totalPrice = state.products.reduce((acc, product) =>acc+product.totalProductPrice,0)
    state.totalPrice=Number(state.totalPrice.toFixed(2))
}
function calculateTotalPriceProduct(product:ICartItem):number{
    return parseFloat((product.count*product.product.price).toFixed(2))
}

const initialState:ICart = {
    products:[],
    totalPrice:0
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action:PayloadAction<IProduct>){
            let product = action.payload
            let findedProduct = state.products.find(x=>x.product.id===product.id);
            if(findedProduct){
                findedProduct.count++
                findedProduct.totalProductPrice = calculateTotalPriceProduct(findedProduct)
            }else{
                let cartItem:ICartItem = {product:product,totalProductPrice:product.price,count:1}
                state.products.push(cartItem)
            }
            calculatePrice(state)
        },
        dropState(state){
          state.products=[]
          state.totalPrice=0

        },
        removeFromCart(state,action:PayloadAction<number>){
            let productId:number = action.payload
            state.products = state.products.filter(x=>x.product.id!==productId)
            calculatePrice(state)
        },
        decrementItemCount(state,action:PayloadAction<number>){
            let productId:number = action.payload
            const cartItem = state.products.find(x=>x.product.id===productId)
            if(!cartItem) return state
            cartItem.count--
            cartItem.totalProductPrice = calculateTotalPriceProduct(cartItem)
            calculatePrice(state)
        }

    }
})

export const getCartState = (state:RootState)=>state.cart
export const {addToCart,dropState,removeFromCart,decrementItemCount} = cartSlice.actions
export default cartSlice.reducer