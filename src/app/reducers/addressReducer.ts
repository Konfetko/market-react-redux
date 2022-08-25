export enum AddressAction{
    InputCity,
    InputStreet,
    InputHouse,
    InputFlatNumber,
}

export interface IAddressFormState{
    city:string,
    street:string,
    house:string,
    flatNumber:number
}
export interface IAddressFormActionString{
    type:AddressAction.InputHouse | AddressAction.InputCity | AddressAction.InputStreet,
    payload:string
}
export interface IAddressFormActionNumber{
    type:AddressAction.InputFlatNumber,
    payload:number
}
export type AddressActions = IAddressFormActionNumber | IAddressFormActionString

export const initializationAddressValue:IAddressFormState={
    city:'',
    street:'',
    house:'',
    flatNumber:0
}
 const addressReducer=(state:IAddressFormState=initializationAddressValue,action:AddressActions) :IAddressFormState=>{
    switch (action.type) {
        case AddressAction.InputCity:
            return {...state,city:action.payload}

        case AddressAction.InputStreet:
            return {...state,street:action.payload}

        case AddressAction.InputHouse:
            return {...state,house:action.payload}

        case AddressAction.InputFlatNumber:
            return {...state, flatNumber:action.payload}

        default:
            return state
    }
}
export default addressReducer