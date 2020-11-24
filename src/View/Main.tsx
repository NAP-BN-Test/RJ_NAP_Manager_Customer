import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import {
  Customer,
  toggleChangeStatus,
  toggleEditDateTime,
  toggleEditNumberUser,
  toggleDelete,
} from "../types";
import CustomerList from "../Component/Customer/CustomerList";
import { useHistory } from "react-router-dom";

function Main() {
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer
  );
  const dispatch = useDispatch();
  const history =  useHistory();
  useEffect(() => {
    getlistcustomer();
  }, []);

  const getlistcustomer = async () => {
    await dispatch(Action.act_get_list_customer())
  };

  const toggleChangeStatus: toggleChangeStatus = (CustomerID, Status) => {
    dispatch(Action.act_change_status(CustomerID, Status));
  };

  const toggleEditDateTime: toggleEditDateTime = (CustomerID, DateExprired) => {
    dispatch(Action.act_change_date(CustomerID, DateExprired));
  };

  const toggleEditNumberUser: toggleEditNumberUser = (
    customerID: number,
    dbName: string,
    userName: string,
    account: number,
    customerName: string
  ) => {
    dispatch(
      Action.act_change_NumberUser(
        customerID,
        dbName,
        userName,
        account,
        customerName
      )
    );
  };

  const toggleDelete: toggleDelete = (
    dbName: string,
    username: string,
    id: number
  ) => {
    dispatch(Action.act_deleteDB(dbName, username, id));
  };

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
      </Breadcrumb>
      <CustomerList
        customers={customers}
        toggleChangeStatus={toggleChangeStatus}
        toggleEditDateTime={toggleEditDateTime}
        toggleEditNumberUser={toggleEditNumberUser}
        toggleDelete={toggleDelete}
      />
    </div>
  );
}

export default Main;
