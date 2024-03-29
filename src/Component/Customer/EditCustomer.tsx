import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Select, Spin } from "antd";
import { FormInstance } from "antd/lib/form";
import { Account, Customer, objectID, ToggleAddCustomer } from "../../types";
import { RootState } from "../../redux/reducers/index.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Action } from "../../redux/actions/index.action";

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

function EditCustomer(props: PropsAddCustomer) {
  const formRef = React.createRef<FormInstance>();

  const dispatch = useDispatch();
  const location = useLocation();
  const [form] = Form.useForm();
  const customers: Customer = useSelector(
    (state: RootState) => state.customer.customers[0]
  );

  // const accounts: Account = useSelector((state: RootState) => state.account);
  const loading = useSelector((state: RootState) => state.loading);
  const [tongtien, setTongTien] = useState(Number);
  const [daThanhToan, setDaThanhToan] = useState(Number);
  const [conno, setConNo] = useState(Number);
  const [isdisable, setIsDisable] = useState(true);
  const [isdisablerequire, setIsDisableRequire] = useState(true);
  const [idCustomer, setIsCustomer] = useState();

  useEffect(() => {
    let objectID: any = location.state;

    setIsCustomer(objectID.id);
    dispatch(Action.act_get_info_customers(objectID.id));
  }, [location]);

  useEffect(() => {
    setTongTien(customers.TongTien);
    setDaThanhToan(customers.DaThanhToan);
    setConNo(customers.TongTien - customers.DaThanhToan);
    if (
      localStorage.getItem("permission") != "KETOAN" &&
      customers.DatabaseName == undefined
    ) {
      setIsDisable(false);
      setIsDisableRequire(false);
    } else if (
      localStorage.getItem("permission") != "KETOAN" &&
      customers.DatabaseName?.length > 0
    ) {
      setIsDisable(false);
    }
    form.resetFields();
  }, [customers]);
  //   useEffect(() => {
  //     form.resetFields();
  //   }, [tongtien]);

  return (
    <Spin tip={loading.message} spinning={loading.visible}>
      <Form
        className="site-form-content"
        {...layout}
        ref={formRef}
        form={form}
        name="control-ref"
        layout="vertical"
        onFinish={(value) =>
          props.toggleAddCustomer(
            idCustomer,
            value.customerName,
            value.customerCode,
            value.masothue,
            value.address,
            value.nguoidaidien,
            value.phonenumber,
            value.email,
            value.loaikhachhang,
            value.duration,
            value.noAccount,
            value.locyversion,
            tongtien,
            daThanhToan
          )
        }
        initialValues={{
          customerName: customers.CompanyName,
          customerCode: customers.CompanyCode,
          masothue: customers.MaSoThue,
          address: customers.Address,
          nguoidaidien: customers.NguoiDaiDien,
          phonenumber: customers.PhoneNumber,
          email: customers.Email,
          loaikhachhang: customers.LoaiKhachHang,
          duration: customers.Duration,
          noAccount: customers.NoAccount,
          locyversion: customers.LocyVersion,
          tongtien: customers.TongTien,
          dathanhtoan: customers.DaThanhToan,
        }}
      >
        <Form.Item
          name="customerName"
          label="Tên khách hàng"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập tên khách hàng" disabled={isdisable} />
        </Form.Item>
        <Form.Item
          name="customerCode"
          label="Mã khách hàng"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập mã khách hàng" disabled={isdisablerequire} />
        </Form.Item>
        <Form.Item name="masothue" label="MST" rules={[{ required: true }]}>
          <Input placeholder="Nhập MST" disabled={isdisable} />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
          <Input placeholder="Nhập địa chỉ" disabled={isdisable} />
        </Form.Item>

        <Form.Item
          name="nguoidaidien"
          label="Đại điện"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập Đại điện" disabled={isdisable} />
        </Form.Item>
        <Form.Item
          name="phonenumber"
          label="Số điện thoại"
          rules={[{ required: true }]}
        >
          <Input placeholder="Nhập Số điện thoại" disabled={isdisable} />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input placeholder="Nhập Email" disabled={isdisable} />
        </Form.Item>
        <Form.Item
          name="loaikhachhang"
          label="Loại khách hàng"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Chọn loại khách hàng"
            // onChange={onGenderChange}
            allowClear
            disabled={isdisable}
          >
            <Option value="Thuê bao">Thuê bao</Option>
            <Option value="Trả trọn gói">Trả trọn gói</Option>
          </Select>
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
            disabled={isdisable}
          >
            <Option value={7}>1 Tuần</Option>
            <Option value={30}>1 Tháng</Option>
            <Option value={90}>3 Tháng</Option>
            <Option value={180}>6 Tháng</Option>
            <Option value={365}>1 Năm</Option>
            <Option value={9999}>Vĩnh viễn</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="noAccount"
          label="Số lượng user"
          rules={[{ required: true }]}
          //   initialValue={5}
        >
          <Input
            type="number"
            min={0}
            disabled={isdisable}
            placeholder="Chọn số lượng user được sử dụng"
          />
        </Form.Item>
        {localStorage.getItem("permission") == "SALE" ? null : (
          <div>
            <Form.Item
              name="tongtien"
              label="Tổng tiền"
              // rules={[{ required: true }]}
            >
              <InputNumber
                // defaultValue={1000}
                value={tongtien}
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) => {
                  console.log(Number(value) - daThanhToan);

                  setTongTien(Number(value));
                  setConNo(Number(value) - daThanhToan);
                }}
              />
            </Form.Item>

            <Form.Item
              name="dathanhtoan"
              label="Đã thanh toán"
              // rules={[{ required: true }]}
            >
              <InputNumber
                // defaultValue={1000}
                value={daThanhToan}
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) => {
                  setDaThanhToan(Number(value));
                  setConNo(tongtien - Number(value));
                }}
              />
            </Form.Item>
            <div>Còn nợ</div>
            <InputNumber
              value={conno}
              style={{ width: "100%", marginTop: 8, marginBottom: 24 }}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </div>
        )}
        {/* </Form.Item> */}
        <Form.Item
          name="locyversion"
          label="Chọn phiên bản"
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group disabled={isdisablerequire}>
            <Radio value={1}>Locy version 1</Radio>
            <Radio value={2}>Locy version 2</Radio>
          </Radio.Group>
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Spin>
  );
}
export default EditCustomer;
