import React from "react";
import { Breadcrumb } from "antd";
import AddCustomer from "../Component/Customer/AddCustomer";
import { useDispatch } from "react-redux";
import { Action } from "../redux/actions/index.action";

function Customer() {
  const dispatch = useDispatch();
  
  function toggleAddCustomer(
    customerName: string,
    dbName: string,
    duration: string,
    noAccount: number,
    username: string,
    password: string
  ) {
    dispatch(Action.act_add_customersDB(customerName, dbName, duration, noAccount, username, password))
  }
  return (
    <div className="site-layout-content">
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-form-content">
        <AddCustomer toggleAddCustomer={toggleAddCustomer} />
      </div>
    </div>
  );
}

export default Customer;
