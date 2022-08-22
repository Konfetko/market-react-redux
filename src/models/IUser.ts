
import {IUserDetails} from "./IUserDetails";

export interface IUser {
    id?:number,
    username:string,
    password:string,
    fio:string,
    email:string,
    details?:IUserDetails
}