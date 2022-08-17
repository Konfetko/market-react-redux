import {IProduct} from "./IProduct";

export interface IProducts{
    products:IProduct[],
    modifiedProducts:IProduct[],
    error:string,
    loading:boolean,
    isModified:boolean
}