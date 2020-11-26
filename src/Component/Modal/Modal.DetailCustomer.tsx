import { Button, Modal } from "antd";
import React from "react";
import {
  ToggleChangeDate,
  ToggleChangeNoAccount,
  ToggleChangeStatus,
  ToggleDelete,
  ToggleVisiable,
} from "../../types";
import {
  CalendarFilled,
  DeleteFilled,
  EditFilled,
  PauseCircleFilled,
  PlayCircleFilled,
} from "@ant-design/icons";

interface PropsCustomerList {
  title: string;
  visible: boolean;
  status: boolean;
  id: number;
  date: string;
  noAccount: number;
  dbName: string;
  username: string;
  handleCancel: ToggleVisiable;
  toggleChangeStatus: ToggleChangeStatus;
  toggleShowModalDate: () => void;
  toggleShowModalNoAccount: () => void;
  toggleDelete: ToggleDelete;
}

function ModalDetailCustomer(props: PropsCustomerList) {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onCancel={() => props.handleCancel(props.visible)}
    >
      <p
        onClick={() => props.toggleChangeStatus(props.id, props.status)}
        style={{ cursor: "pointer" }}
      >
        {props.status ? (
          <PauseCircleFilled
            style={{ marginRight: "15px", fontSize: "15px" }}
          />
        ) : (
          <PlayCircleFilled style={{ marginRight: "15px", fontSize: "15px" }} />
        )}
        {props.status ? "Tạm dừng dịch vụ" : "Tiếp tục dịch vụ"}
      </p>
      <p
        onClick={() => props.toggleShowModalDate()}
        style={{ cursor: "pointer" }}
      >
        <CalendarFilled style={{ marginRight: "15px", fontSize: "15px" }} />
        Sửa ngày hết hạn
      </p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => props.toggleShowModalNoAccount()}
      >
        <EditFilled style={{ marginRight: "15px", fontSize: "15px" }} />
        Sửa số lượng user
      </p>
      <p
        onClick={() => props.toggleDelete(props.dbName, props.username, props.id)}
        style={{ cursor: "pointer" }}
      >
        <DeleteFilled style={{ marginRight: "15px", fontSize: "15px" }} />
        Xóa Database
      </p>
    </Modal>
  );
}

export default ModalDetailCustomer;
