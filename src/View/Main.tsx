import React, { useEffect } from "react";
import { Breadcrumb, notification, Pagination } from "antd";
import CustomerList from "../Component/Customer/CustomerList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/index.reducer";
import { Alert, Customer } from "../types";
import { Action } from "../redux/actions/index.action";

function Main() {
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer.customers
  );
  const total = useSelector((state: RootState) => state.customer.total);
  const alert: Alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    getlistcustomer(1);
  }, []);

  useEffect(() => {
    func_alert(alert);
  }, [alert.message || alert.type]);

  async function getlistcustomer(value: number) {
    await dispatch(Action.act_get_list_customer(value));
  }

  function func_alert(alerts: Alert) {
    if (alerts.type === "success" || alerts.type === "error") {
      notification[alerts.type]({
        message: alerts.type.toUpperCase(),
        description: alerts.message,
      });
    }
  }

  async function handlePagination(value: any) {
    dispatch(Action.act_get_list_customer(value));
  }

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-form-content">
        <CustomerList customers={customers} />
        <Pagination
          style={{ marginTop: "10px" }}
          defaultPageSize={10}
          total={total}
          onChange={handlePagination}
          pageSizeOptions={["10"]}
        />
      </div>
    </div>
  );
}

export default Main;
