import { Input, Modal } from "antd";
import React from "react";
import { ToggleChangeNoAccount, ToggleVisiable } from "../../types";

interface PropsCustomerList {
  visible: boolean;
  id: number;
  noAccount: number;
  dbName: string;
  username: string;
  customerName: string;
  handleCancelModalEditNoAccount: ToggleVisiable;
  toggleOnChangeNoAccount: (e: any) => void;
  toggleChangeNoAccount: ToggleChangeNoAccount;
}

function ModalEditNoAccount(props: PropsCustomerList) {
  return (
    <Modal
      title="Nhập số lượng Account tối đa"
      centered
      visible={props.visible}
      onOk={() => props.toggleChangeNoAccount(props.id, props.dbName, props.username, props.noAccount, props.customerName)}
      onCancel={() => props.handleCancelModalEditNoAccount(props.visible)}
    >
      <Input type="number" onChange={(e) => props.toggleOnChangeNoAccount(e)} />
    </Modal>
  );
}

export default ModalEditNoAccount;
