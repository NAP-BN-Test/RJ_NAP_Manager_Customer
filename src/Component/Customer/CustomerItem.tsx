import { Descriptions } from "antd";
import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { convert_date } from "../../assets/utils";
import { Action } from "../../redux/actions/index.action";
import {
  Customer,
} from "../../types";
import ModalDetailCustomer from "../Modal/Modal.DetailCustomer";
import ModalEditDate from "../Modal/Modal.EditDate";
import ModalEditNoAccount from "../Modal/Modal.EditNoAccount";

interface PropsCustomerItem {
  customers: Customer;
}

function CustomerItem(props: PropsCustomerItem) {
  const [visibleCustomer, setVisibleCustomer] = useState(false);
  const [visibleEditDate, setVisibleEditDate] = useState(false);
  const [visibleEditNoAccount, setVisibleEditNoAccount] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newNoAccount, setNewNoAccount] = useState(5);
  const dispatch = useDispatch();

  function showModal() {
    setVisibleCustomer(true);
  }
  function handleCancel() {
    setVisibleCustomer(false);
  }
  function toggleChangeStatus(id: number, status: boolean) {
    dispatch(Action.act_change_status(id, status));
    setVisibleCustomer(false);
  }
  function handleCancelModalEditDate() {
    setVisibleEditDate(false);
  }
  function toggleShowModalDate() {
    setVisibleEditDate(true);
  }
  function toggleOnChangeDate(e: any) {
    setNewDate(e.target.value);
  }
  function toggleChangeDate(id: number, date: string) {
    dispatch(Action.act_change_date(id, date));
    setVisibleCustomer(false);
    setVisibleEditDate(false);
  }
  function handleCancelModalEditNoAccount() {
    setVisibleEditNoAccount(false);
  }
  function toggleShowModalNoAccount() {
    setVisibleEditNoAccount(true);
  }
  function toggleOnChangeNoAccount(e: any) {
    setNewNoAccount(e.target.value);
  }
  function toggleChangeNoAccount(customerId: number, dbName: string, username: string, noAccount: number, customerName: string) {
    dispatch(Action.act_change_noAccount(customerId, dbName, username, noAccount, customerName));
    setVisibleCustomer(false);
    setVisibleEditNoAccount(false);
  }
  function toggleDelete(dbName: string, username: string, id: number) {
    dispatch(Action.act_deleteDB(dbName, username, id));
    setVisibleCustomer(false);
  }

  return (
    <div className="boder-item-customer">
      <ModalDetailCustomer
        title={props.customers.CompanyName}
        visible={visibleCustomer}
        status={props.customers.Status}
        id={props.customers.ID}
        date={props.customers.DateExpired}
        noAccount={props.customers.NoAccount}
        dbName={props.customers.DatabaseName}
        username={props.customers.Username}
        handleCancel={handleCancel}
        toggleChangeStatus={() =>
          toggleChangeStatus(props.customers.ID, props.customers.Status)
        }
        toggleShowModalDate={toggleShowModalDate}
        toggleShowModalNoAccount={toggleShowModalNoAccount}
        toggleDelete={toggleDelete}
      />
      <ModalEditDate
        visible={visibleEditDate}
        id={props.customers.ID}
        date={newDate}
        handleCancelModalEditDate={handleCancelModalEditDate}
        toggleOnChangeDate={(e) => toggleOnChangeDate(e)}
        toggleChangeDate={toggleChangeDate}
      />
      <ModalEditNoAccount
        visible={visibleEditNoAccount}
        id={props.customers.ID}
        noAccount={newNoAccount}
        dbName={props.customers.DatabaseName}
        username={props.customers.Username}
        customerName={props.customers.CompanyName}
        handleCancelModalEditNoAccount={handleCancelModalEditNoAccount}
        toggleOnChangeNoAccount={(e) => toggleOnChangeNoAccount(e)}
        toggleChangeNoAccount={toggleChangeNoAccount}
      />
      <Form onClick={showModal}>
        <Descriptions title={props.customers.CompanyName}>
          <Descriptions.Item label="Database">
            {props.customers.DatabaseName}
          </Descriptions.Item>
          <Descriptions.Item label="userDB">
            {props.customers.Username}
          </Descriptions.Item>
          <Descriptions.Item label="Trạng Thái">
            <span
              style={
                props.customers.Status ? { color: "green" } : { color: "red" }
              }
            >
              {props.customers.Status ? "Đang hoạt động" : "Đã dừng"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Số lượng account">
            {props.customers.NoAccount}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày hết hạn">
            {props.customers.DateExpired}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày cập nhật">
            {convert_date(props.customers.NoDayUpdate)}
          </Descriptions.Item>
        </Descriptions>
      </Form>
    </div>
  );
}

export default CustomerItem;
