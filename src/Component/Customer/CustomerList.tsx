import React from "react";
import { List } from "antd";

function CustomerList() {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  return (
    <List
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}

export default CustomerList;
