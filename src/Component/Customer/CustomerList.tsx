import React from "react";
import { Customer } from "../../types";
import CustomerItem from "./CustomerItem";

interface PropsCustomerList {
  customers: Array<Customer>;
}

function CustomerList(props: PropsCustomerList) {
  return (
    <div>
      {props.customers.map((customer) => {
        return (
          <CustomerItem
            CompanyName={customer.CompanyName}
            DatabaseName={customer.DatabaseName}
            Status={customer.Status}
            Username={customer.Username}
            NoAccount={customer.NoAccount}
            DateEpired={customer.DateEpired}
            NoDayUpdate={customer.NoDayUpdate}
          />
        );
      })}
    </div>
  );
}

export default CustomerList;
