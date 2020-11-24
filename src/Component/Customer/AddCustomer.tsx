import { Button, Form, Input, Select, message, Spin } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/index.reducer";
import { AddNewCustomer } from "../../types";

interface PropsAddCustomer {
  AddNewCustomer: AddNewCustomer;
}

function AddCustomer(props: PropsAddCustomer) {
  const { Option } = Select;
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const tailLayout = {
    wrapperCol: { span: 24 },
  };
  
  const loading = useSelector((state: RootState) => state.loading);
  const [nameCompany, setNameCompany] = useState("");
  const [numberUser, setNumberUser] = useState("");
  const [dateExprired, setDateExprired] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [passComfirm, setPassComfirm] = useState("");
  const [nameDB, setNameDB] = useState("");

  function ValueCompany(e: any) {
    setNameCompany(e.target.value);
  }

  function ValueNumberUser(e: any) {
    setNumberUser(e.target.value);
  }

  function valueDateExprired(value: any) {
    setDateExprired(value);
  }

  function ValueNameDB(e: any) {
    setNameDB(e.target.value);
  }

  function ValueUserName(e: any) {
    setUserName(e.target.value);
  }

  function ValuePass(e: any) {
    setPass(e.target.value);
  }

  function ValuePassCF(e: any) {
    setPassComfirm(e.target.value);
  }

  function handleSubmit(e: any) {
    if (
      nameCompany === "" ||
      numberUser === "" ||
      dateExprired === "" ||
      userName === "" ||
      pass === "" ||
      passComfirm === "" ||
      nameDB === ""
    ) {
      return;
    } else {
      if (pass.trim() === passComfirm.trim()) {
        //console.log(loading.visible);
        
        props.AddNewCustomer(
          nameCompany,
          parseInt(numberUser),
          dateExprired,
          userName,
          pass,
          nameDB
        );
      } else {
        message.error("Mật khẩu không trùng khớp, nhập lại mật khẩu", 3);
      }
    }
  }

  

  return (
    <Spin tip={loading.message} spinning={loading.visible}>
      <Form {...layout} name="basic" initialValues={{ remember: true }}>
        <h1>Thông tin khách hàng</h1>
        <Form.Item
          label="Tên khách hàng hoặc tên công ty"
          name="companyname"
          rules={[
            { required: true, message: "Nhập tên khách hàng hoặc công ty" },
          ]}
        >
          <Input
            name="nameCompany"
            value={nameCompany}
            onChange={ValueCompany}
          />
        </Form.Item>

        <Form.Item
          label="Số lượng user"
          name="numberuser"
          rules={[{ required: true, message: "Nhập số lượng user" }]}
        >
          <Input type="number" value={numberUser} onChange={ValueNumberUser} />
        </Form.Item>

        <Form.Item name="Date" label="Thời hạn" rules={[{ required: true }]}>
          <Select
            placeholder="Chọn thời hạn "
            allowClear
            value={dateExprired}
            onChange={valueDateExprired}
          >
            <Option value="7">7 ngày</Option>
            <Option value="30">1 Tháng</Option>
            <Option value="90">3 Tháng</Option>
            <Option value="180">6 Tháng</Option>
            <Option value="365">1 năm</Option>
            <Option value="9999">Vĩnh viễn</Option>
          </Select>
        </Form.Item>
        <h1>Thông tin server</h1>

        <Form.Item
          label="Tên Database"
          name="namedatabese"
          rules={[{ required: true, message: "Nhập tên Database" }]}
        >
          <Input value={nameDB} onChange={ValueNameDB} />
        </Form.Item>

        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Nhập tên đăng nhập" }]}
        >
          <Input value={userName} onChange={ValueUserName} />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu" }]}
        >
          <Input.Password value={pass} onChange={ValuePass} />
        </Form.Item>

        <Form.Item
          label="Nhập lại mật khẩu"
          name="password1"
          rules={[{ required: true, message: "Nhập lại mật khẩu" }]}
        >
          <Input.Password value={passComfirm} onChange={ValuePassCF} />
        </Form.Item>
        <Form.Item></Form.Item>
        <Form.Item {...tailLayout} style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ textAlign: "center" }}
            onClick={handleSubmit}
          >
            Thêm mới
          </Button>
        </Form.Item>
        
      </Form>
    </Spin>
  );
}

export default AddCustomer;
