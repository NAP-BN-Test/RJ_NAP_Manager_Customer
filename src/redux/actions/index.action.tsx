import { Customer } from "../../types";
import * as constants from "../constants/index";
import { Services } from "../../services/index";

export interface Get_List_Customer {
  type: constants.GET_LIST_CUSTOMER;
  customer: Customer;
}

function act_get_list_customer(customer: Customer) {
  return (dispatch: any) => {
    let body = {
      searchKey: "",
      page: "",
    };
    Services.get_list_customer(body).then(async (res) => {
      console.log(res);
    });
  };
}

export const Action = {
  act_get_list_customer,
};
