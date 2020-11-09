import React from 'react'
import { Breadcrumb} from "antd";

function Customer() {
  
  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Customer;
