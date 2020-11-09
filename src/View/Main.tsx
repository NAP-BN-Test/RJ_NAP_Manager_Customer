import React from 'react'
import { Breadcrumb } from "antd";
import CustomerList from '../Component/Customer/CustomerList';

function Main() {
  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
      </Breadcrumb>
      <CustomerList/>
    </div>
  );
}

export default Main;
