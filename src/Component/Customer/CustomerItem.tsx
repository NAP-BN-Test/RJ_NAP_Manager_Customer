import { Descriptions } from "antd";
import React from "react";
import { Customer } from "../../types";

function CustomerItem(props: Customer) {
  return (
    <Descriptions title={props.CompanyName}>
      <Descriptions.Item label="Database">
        {props.DatabaseName}
      </Descriptions.Item>
      <Descriptions.Item label="userDB">{props.Username}</Descriptions.Item>
      <Descriptions.Item label="Trạng Thái">{props.Status}</Descriptions.Item>
      <Descriptions.Item label="Số lượng account">
        {props.NoAccount}
      </Descriptions.Item>
      <Descriptions.Item label="Ngày hết hạn">{props.DateEpired}</Descriptions.Item>
      <Descriptions.Item label="Ngày cập nhật">{props.NoDayUpdate}</Descriptions.Item>
    </Descriptions>
  );
}

export default CustomerItem;
