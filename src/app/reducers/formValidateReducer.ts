import {IFormState} from "./formReducer";

export interface IFormValidityState{
    usernameError:string,
    passwordError:string,
    emailError:string,
    isFormValidity:boolean
}
export interface IFormValidityAction{
    type:string,
    payload:IFormState
}
export const initialFormValidityState:IFormValidityState = {
    emailError:'',
    usernameError:'',
    passwordError:'',
    isFormValidity:false
}
const formValidateReducer = (state:IFormValidityState=initialFormValidityState,action:IFormValidityAction):IFormValidityState=>{
    switch (action.type){
        case 'VALIDATE_USERNAME':
            if(!action.payload.username)
                return {...state,usernameError:'Заполните имя пользователя',isFormValidity:false}
            if(action.payload.username.length<6)
                return {...state,usernameError:'Минимальная длина имени пользователя 6 символов',isFormValidity:false}
            return {...state,usernameError:''}

        case 'VALIDATE_PASSWORD':
            if(!action.payload.password)
                return {...state,passwordError:'Заполните поле с паролем',isFormValidity:false}
            if(action.payload.password.length<6)
                return {...state,passwordError:'Минимальная длина пароля 6 символов',isFormValidity:false}
            if(!action.payload.password.includes('@'||'/'||'!'||'?'||'-'||'_'))
                return {...state,passwordError:'Пароль должен содержать спец. символы',isFormValidity:false}
            return {...state,passwordError:''}

        case 'VALIDATE_EMAIL':
            if(!action.payload.email)
                return {...state,emailError:'Заполните поле с вашей почтой',isFormValidity:false}
            if(action.payload.email.match('/^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/'))
                return {...state,emailError:'Проверьте вашу почту',isFormValidity:false}
            return {...state,emailError:''}

        case 'VALIDATE_FORM':
            return {...state,isFormValidity: !state.usernameError && !state.passwordError && !state.emailError}

        default:
            return state

    }

}
export default formValidateReducer