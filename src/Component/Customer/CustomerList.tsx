import React from "react";
import {
  Customer,
  ToggleChangeDate,
  ToggleChangeNoAccount,
  ToggleChangeStatus,
  ToggleDelete,
  ToggleVisiable,
} from "../../types";
import CustomerItem from "./CustomerItem";

interface PropsCustomerList {
  customers: Array<Customer>;
}

function CustomerList(props: PropsCustomerList) {
  return (
    <div>
      {props.customers.map((customer, idx) => {
        return (
          <CustomerItem
            key={idx}
            customers={customer}
          />
        );
      })}
    </div>
  );
}

export default CustomerList;
