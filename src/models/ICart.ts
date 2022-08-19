
import {ICartItem} from "./ICartItem";

export interface ICart{
    products:ICartItem[],
    totalPrice:number
}