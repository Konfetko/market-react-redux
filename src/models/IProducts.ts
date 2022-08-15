import {IProduct} from "./IProduct";

export interface IProducts{
    products:IProduct[],
    error:string,
    loading:boolean
}