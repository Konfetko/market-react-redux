import {IProduct} from "../../models/IProduct";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {$api} from "../../app/http/api";
import {RootState} from "../../app/store";
import {IProducts} from "../../models/IProducts";

const initialState:IProducts={
    loading:false,
    products:[],
    modifiedProducts:[],
    error:'',
    isModified:false
}

export  const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const response = await $api.get<IProduct[]>('products')
        return response.data

    })


export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        filterProductsByCategory(state,action:PayloadAction<string>) {
            state.modifiedProducts = state.products.filter(x=>x.category===action.payload)
            state.isModified=true
        },
        sortProductsByField(state,action:PayloadAction<string>){
            if(state.isModified)
                state.modifiedProducts = state.modifiedProducts.sort((a,b)=>{
                    //@ts-ignore
                    return (a[action.payload]>b[action.payload])?1:-1
                })
            else
                state.modifiedProducts = state.products.sort((a,b)=>{
                    //@ts-ignore
                    return (a[action.payload]>b[action.payload])?1:-1
                })
        },
        filterByName(state,action:PayloadAction<string>){
            const isEntered = (title:string,anotherTitle:string)=>{
                let titleLower = title.toLocaleLowerCase()
                let anotherLower = anotherTitle.toLocaleLowerCase()
                return  titleLower===anotherLower || titleLower.includes(anotherLower)
            }

            if(action.payload==='')
            {
                state.modifiedProducts=state.products
            }
            else {
                if (state.isModified)
                    state.modifiedProducts = state.modifiedProducts.filter(x => isEntered(x.title,action.payload))
                else {
                    state.modifiedProducts = state.products.filter(x => isEntered(x.title, action.payload))
                    state.isModified=true
                }
            }
        },
        clearModified(state){
            state.modifiedProducts=state.products
            state.isModified=false
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<IProduct[]>)=>{
            state.loading=false
            state.products = action.payload
            state.modifiedProducts = action.payload
            state.error=''
            state.isModified=false
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.products=[]
            state.modifiedProducts=[]
            state.error="error 404"
            state.loading=false
            state.isModified=false
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.error=''
        })



    }
})


export const {filterProductsByCategory,sortProductsByField,clearModified,filterByName}=productsSlice.actions

export const getProductsState =(state:RootState)=>state.products

export default productsSlice.reducer
