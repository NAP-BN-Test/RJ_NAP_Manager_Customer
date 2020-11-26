import { Breadcrumb, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerList from "../Component/Customer/CustomerList";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import {
  Customer,
  toggleChangeStatus,
  toggleDelete, toggleEditDateTime,
  toggleEditNumberUser
} from "../types";
import './MainStyle.css'

function Main() {
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer
  );
  const countRecode = useSelector((state: RootState) => state.countRecod);
  
  const [pageNumber, setPageNumber] = useState(1);
  
  const dispatch = useDispatch();

  useEffect(() => {
    getlistcustomer(pageNumber);
  }, [pageNumber]);

  const getlistcustomer = async (pageNumber: number) => {
    await dispatch(Action.act_get_list_customer(pageNumber))
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

  function handlePage(page: number){
    setPageNumber(page);
  }

  

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
      
      <Pagination  total={countRecode.count} onChange={handlePage}/>
    </div>
  );
}

export default Main;
