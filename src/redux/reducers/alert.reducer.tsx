import { ALERT_ERROR, ALERT_SUCCESS } from "../constanst";


const initState ={
    type: '',
    message: ''
}


function rdc_alert(state = initState, action: any){
    switch(action.type){
        case ALERT_SUCCESS:
            return{
                type: 'succsess',
                message: action.message
            }
        case ALERT_ERROR:
            return{
                type: 'error',
                message: action.message
            }
        default:
            return state
    }
}

export default rdc_alert