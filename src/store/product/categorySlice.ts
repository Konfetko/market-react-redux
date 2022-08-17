import {ICategories} from "../../models/ICategories";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$api} from "../../app/http/api";
import {RootState} from "../../app/store";

const initialState:ICategories = {
    categories:[]
}
export const fetchProductCategories = createAsyncThunk(
    'products/fetchProductCategories',
    async ()=>{
        const response = await $api.get('products/categories')
        return response.data
    }
)
export const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductCategories.fulfilled,(state,action)=>{
            state.categories = action.payload
        })
    }
})
export const getCategoriesState = (state:RootState)=>state.categories
export default categorySlice.reducer