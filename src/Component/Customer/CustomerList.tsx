import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/index.reducer";
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
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <div>
      <Spin tip={loading.message} spinning={loading.visible}>
        {props.customers.map((customer, idx) => {
          return <CustomerItem key={idx} customers={customer} />;
        })}
      </Spin>
    </div>
  );
}

export default CustomerList;
