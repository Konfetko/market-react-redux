export interface IAdress extends IAdressAdd{
    idAdress:number
}
export interface IAdressAdd{
    city:string,
    street:string,
    house:string,
    flatNumber:number
}
export interface IAdressChange{
    sourceAdress:IAdress,
    changedAdress:IAdressAdd
}