import { Customer } from "../../types";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
  GET_LIST_CUSTOMER,
} from "../constants";

const initState: Array<Customer> = [
  {
    CompanyName: "",
    Status: false,
    DatabaseName: "",
    Username: "",
    NoAccount: 0,
    DateEpired: "",
    NoDayUpdate: 0,
  },
];

const rdc_customer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      
      return action.customers.map((customer: any) => {
        // var datetime: DateConstructor = new Date();
        return {
          CompanyName: customer.name,
          DatabaseName: customer.dbName,
          DateEpired: customer.dbName,
          NoAccount: customer.numberUser,
          NoDayUpdate: Date.now() - Date.parse(customer.updatedTime),
          Status: customer.status,
          Username: customer.username,
        };
      });
    case ADD_CUSTOMER:
      return state;
    case EDIT_CUSTOMER:
      return state;
    case DELETE_CUSTOMER:
      return state;
    default:
      return state;
  }
};

export default rdc_customer;
