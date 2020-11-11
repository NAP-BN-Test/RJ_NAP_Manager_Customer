import { Customer } from "../../types";
import * as constants from "../constants/index";
import { Services } from "../../services/index";

export interface Get_List_Customer {
  type: constants.GET_LIST_CUSTOMER;
  customer: Customer;
}

export type AUTHENTICATE = Get_List_Customer;

// function gọi đến reducer
function func_get_list_customer(customer: any) {
  return {
    type: constants.GET_LIST_CUSTOMER,
    customers: customer,
  };
}
function act_alert_success(messages: string) {
  return {
      type: constants.ALERT_SUCCESS,
      message: messages
  }
};
function act_alert_error(messages: string) {
  return {
      type: constants.ALERT_ERROR,
      message: messages
  }
};

// action xử lý
function act_get_list_customer() {
  return (dispatch: any) => {
    let body = {
      searchKey: "",
      page: 1,
    };
    Services.get_list_customer(body).then(async (res) => {
      if (res.status == "1") {
        let customers = res.array;
        dispatch(func_get_list_customer(customers));
      } else {
        dispatch(act_alert_error("Lấy dữ liệu thất bại!"));
      }
    });
  };
}

export const Action = {
  act_get_list_customer,
};
