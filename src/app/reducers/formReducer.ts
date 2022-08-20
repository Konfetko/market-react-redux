
export interface IFormState {
    username:string,
    password:string,
    email:string
}
export interface IFormAction {
    type:string,
    payload:string
}
export const initialFormState:IFormState = {
    username:'',
    password:'',
    email:''
}
const formReducer = (state:IFormState = initialFormState, action:IFormAction):IFormState=>{
    switch (action.type){
        case 'UPDATE_USERNAME':
            return {...state,username:action.payload}
        case 'UPDATE_PASSWORD':
            return {...state,password:action.payload}
        case 'UPDATE_EMAIL':
            return {...state,email:action.payload}
        default:
            return state
    }
}
export default formReducer