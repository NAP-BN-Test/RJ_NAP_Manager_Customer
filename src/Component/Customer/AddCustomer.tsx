import React from "react";
import { Button, Form, Input, InputNumber, Select, Spin } from "antd";
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
        <Form.Item name="customerName" label="Tên" rules={[{ required: true }]}>
          <Input placeholder="Nhập tên" />
        </Form.Item>
        <Form.Item
          name="customerName"
          label="Địa chỉ"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập địa chỉ" />
        </Form.Item>
        <Form.Item name="customerName" label="MST" rules={[{ required: true }]}>
          <Input placeholder="Nhập MST" />
        </Form.Item>
        <Form.Item
          name="customerName"
          label="Đại điện"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập Đại điện" />
        </Form.Item>
        <Form.Item
          name="customerName"
          label="Số điện thoại"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập Số điện thoại" />
        </Form.Item>
        <Form.Item
          name="customerName"
          label="Email"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập Email" />
        </Form.Item>
        <Form.Item
          name="duration"
          label="Loại khách hàng"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Chọn loại khách hàng"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="7">Thuê bao</Option>
            <Option value="30">Trả trọn gói</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="customerName"
          label="Tổng tiền"
          rules={[{ required: true }]}
        >
          <InputNumber
            // defaultValue={1000}
            style={{ width: '100%' }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            // onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="customerName"
          label="Đã thanh toán"
          rules={[{ required: true }]}
        >
          <InputNumber
            // defaultValue={1000}
            style={{ width: '100%' }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            // onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="customerName"
          label="Còn nợ"
          rules={[{ required: true }]}
        >
          <InputNumber
            // defaultValue={1000}
            style={{ width: '100%' }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            // onChange={onChange}
          />
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Spin>
  );
}
export default AddCustomer;
