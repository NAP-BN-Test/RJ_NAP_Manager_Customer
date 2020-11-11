import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import CustomerList from "../Component/Customer/CustomerList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/index.reducer";
import { Customer } from "../types";
import { Action } from "../redux/actions/index.action";

function Main() {
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getlistcustomer();
  }, []);
  const getlistcustomer = async () => {
    await dispatch(Action.act_get_list_customer());
    console.log(customers);
  };
  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
      </Breadcrumb>
      <CustomerList customers={customers} />
    </div>
  );
}

export default Main;
