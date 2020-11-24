import { message } from 'antd';
import React from "react";
import { Customer } from "../../types";
import { DELETE_CUSTOMER, EDIT_STATUS, GET_LIST_CUSTOMER } from "../constanst";


const initState: Array<Customer> = [
  {
    Id: 0,
    CompanyName: "",
    Status: false,
    DatabaseName: "",
    Username: "",
    NoAccount: 0,
    DateExprired: "",
    NoDayUpdate: 0,
  },
];

const rdc_customer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_LIST_CUSTOMER:
      return action.customers.map((customer: any) => {
        return {
          Id: customer.id,
          CompanyName: customer.name,
          DatabaseName: customer.dbName,
          DateExprired: customer.expireDate,
          NoAccount: customer.numberUser,
          NoDayUpdate: customer.updatedTime,
          Status: customer.status,
          Username: customer.username,
        };
      });

    case EDIT_STATUS:
      if(action.status === 1){
        //message.success('This is a success message')
      }
      return state;
    case DELETE_CUSTOMER:
      return state;
    default:
      return state;
  }
};

export default rdc_customer;
