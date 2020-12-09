import { notification } from "antd";
import { ALERT_SUCCESS, ALERT_ERROR } from "../constants";

const initState = {
  type: "",
  message: "",
};

function rdc_alert(state = initState, action: any) {
  switch (action.type) {
    case ALERT_SUCCESS:
      notification["success"]({
        message: "SUCCESS",
        description: action.message,
      });
      return {
        type: "success",
        message: action.message,
      };
    case ALERT_ERROR:
      notification["error"]({
        message: "ERROR",
        description: action.message,
      });
      return {
        type: "error",
        message: action.message,
      };
    default:
      return state;
  }
}

export default rdc_alert;
