import { Input, Modal } from "antd";
import React from "react";
import { ToggleChangeDate, ToggleVisiable } from "../../types";

interface PropsCustomerList {
  visible: boolean;
  id: number;
  date: string;
  handleCancelModalEditDate: ToggleVisiable;
  toggleOnChangeDate: (e: any) => void;
  toggleChangeDate: ToggleChangeDate;
}

function ModalEditDate(props: PropsCustomerList) {
  return (
    <Modal
      title="Nhập ngày (yyyy-mm-dd)"
      centered
      visible={props.visible}
      onOk={() => props.toggleChangeDate(props.id, props.date)}
      onCancel={() => props.handleCancelModalEditDate(props.visible)}
    >
      <Input type="date" onChange={(e) => props.toggleOnChangeDate(e)} />
    </Modal>
  );
}

export default ModalEditDate;
