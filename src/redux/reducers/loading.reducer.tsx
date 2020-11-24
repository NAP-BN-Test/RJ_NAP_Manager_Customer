import { HIDE_LOADING, SHOW_LOADING } from "../constanst";

const initState = {
  visible: false,
  message: "",
};

function rdc_loading(state = initState, action: any) {
  switch (action.type) {
    case SHOW_LOADING:
      console.log(state);
      return {
        visible: true,
        message: action.message,
      };
    case HIDE_LOADING:
      return {
        visible: false,
        message: "",
      };
    default:
      return state;
  }
}

export default rdc_loading;
