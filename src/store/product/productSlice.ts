import {IProductState} from "../../models/IProductState";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {$api} from "../../app/http/api";
import {IProduct} from "../../models/IProduct";

export const fetchProduct = createAsyncThunk(
    '',
    async (id:number)=>{
        const response = await $api.get(`products/${id}` )
        return response.data
    }
)



const initialState:IProductState={
    product:{id:0,description:'',price:0,category:'',title:'',image:''}
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action:PayloadAction<IProduct>)=>{
            state.product=action.payload
        })

    }

})
export const {} = productSlice.actions
export const getProductState=(state:RootState)=>  state.product
export default productSlice.reducer