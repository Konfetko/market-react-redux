import {IProduct} from "../../models/IProduct";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {$api} from "../../app/http/api";
import {RootState} from "../../app/store";
import {IProducts} from "../../models/IProducts";

const initialState:IProducts={
    loading:false,
    products:[],
    error:''
}

export  const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const response = await $api.get<IProduct[]>('products')

        return response.data

    })

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        filterProducts(state,action:PayloadAction<string>) {
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<IProduct[]>)=>{
            state.loading=false
            state.products = action.payload
            state.error=''
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.products=[]
            state.error="error 404"
            state.loading=false
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.error=''
        })


    }
})


export const {filterProducts}=productSlice.actions

export const getProductsState =(state:RootState)=>state.products

export default productSlice.reducer
