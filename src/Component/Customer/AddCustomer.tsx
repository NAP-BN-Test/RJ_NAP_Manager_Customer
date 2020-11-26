import React from "react";
import { Button, Form, Input, Select, Spin } from "antd";
import { FormInstance } from "antd/lib/form";
import { ToggleAddCustomer } from "../../types";
import { RootState } from "../../redux/reducers/index.reducer";
import { useSelector } from "react-redux";

const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

const { Option } = Select;

interface PropsAddCustomer {
  toggleAddCustomer: ToggleAddCustomer;
}

function AddCustomer(props: PropsAddCustomer) {
  const formRef = React.createRef<FormInstance>();
  const loading = useSelector((state: RootState) => state.loading);

  return (
    <Spin tip={loading.message} spinning={loading.visible}>
      <Form
        className="site-form-content"
        {...layout}
        ref={formRef}
        name="control-ref"
        layout="vertical"
        onFinish={(value) =>
          props.toggleAddCustomer(
            value.customerName,
            value.dbName,
            value.duration,
            value.noAccount,
            value.username,
            value.password
          )
        }
      >
        <Form.Item
          name="customerName"
          label="Tên khách hàng hoặc công ty"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập tên khách hàng, công ty" />
        </Form.Item>
        <Form.Item
          name="noAccount"
          label="Số lượng user"
          rules={[{ required: true }]}
          initialValue={5}
        >
          <Input
            type="number"
            min={0}
            placeholder="Chọn số lượng user được sử dụng"
          />
        </Form.Item>
        <Form.Item
          name="duration"
          label="Thời hạn"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Chọn thời hạn sử dụng"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="7">1 Tuần</Option>
            <Option value="30">1 Tháng</Option>
            <Option value="90">3 Tháng</Option>
            <Option value="180">6 Tháng</Option>
            <Option value="365">1 Năm</Option>
            <Option value="9999">Vĩnh viễn</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dbName"
          label="Tên Database"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập tên Database" />
        </Form.Item>
        <Form.Item
          name="username"
          label="Tên đăng nhập"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập tên đăng nhập vào DB" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true }]}
        >
          <Input type="password" placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item
          name="rePassword"
          label="Nhập lại mật khẩu"
          rules={[{ required: true }]}
        >
          <Input type="password" placeholder="Nhập lại mật khẩu" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
}
export default AddCustomer;
