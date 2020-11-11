import { AUTHENTICATE } from "../actions/index.action";
import { ALERT_SUCCESS, ALERT_ERROR } from "../constants";

const initState = {
    type: '',
    message: ''
}

function rdc_alert(state = initState, action: any) {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'success',
                message: action.message
            }
        case ALERT_ERROR:
            return {
                type: 'error',
                message: action.message
            }
        default:
            return state
    }
}

export default rdc_alert