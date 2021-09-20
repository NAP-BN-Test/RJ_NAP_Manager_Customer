import React, { useEffect, useState } from "react";
import { Breadcrumb, Pagination, Input } from "antd";
import CustomerList from "../Component/Customer/CustomerList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/index.reducer";
import { Alert, Customer } from "../types";
import { Action } from "../redux/actions/index.action";

const { Search } = Input;

function ExpiredAndStop() {
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer.customers
  );
  const total = useSelector((state: RootState) => state.customer.total);
  const alert: Alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    getlistcustomer2("", 1);
  }, []);

  function getlistcustomer2(searchKey: string, value: number) {
    dispatch(Action.act_get_list_customer_expired(searchKey, value));
  }

  function handlePagination(value: any) {
    dispatch(Action.act_get_list_customer_expired(searchKey, value));
  }

  function getlistcustomerSearch(searchKey: string,) {
    setSearchKey(searchKey)
    dispatch(Action.act_get_list_customer_expired(searchKey, 1));
  }

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách khách hàng hết hạn và dừng</Breadcrumb.Item>
      </Breadcrumb>
      <div className="input-search">
        <Search placeholder="input keyword" allowClear enterButton="search" onSearch={getlistcustomerSearch}/>
      </div>
      <div className="site-form-content">
        <CustomerList customers={customers} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Pagination
          defaultPageSize={10}
          total={total}
          onChange={handlePagination}
          pageSizeOptions={["10"]}
        />
      </div>
    </div>
  );
}

export default ExpiredAndStop;
