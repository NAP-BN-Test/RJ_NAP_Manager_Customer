import { Breadcrumb, Button, notification, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import { Account, Customer } from "../types";

function ListCustomer() {
  let history = useHistory();
  // const accounts: Account = useSelector((state: RootState) => state.account);
  const customers: Array<Customer> = useSelector(
    (state: RootState) => state.customer.customers
  );

  const [listCustomerSelect, setlistCustomerSelect] = useState([] as any);
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  console.log("row", selectedRowKeys);
  console.log("arrid", listCustomerSelect);

  const dispatch = useDispatch();
  useEffect(() => {
    getlistcustomer();
  }, []);

  function getlistcustomer() {
    dispatch(Action.act_get_list_customer_register(1));
  }

  function onUpdate(r: any) {
    history.push("/detail_customer_register", { id: r.ID });
  }

  const columns = [
    {
      title: "Tên Công Ty",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "MST",
      dataIndex: "MaSoThue",
      key: "MaSoThue",
    },
    {
      title: "Đại điện",
      dataIndex: "NguoiDaiDien",
      key: "NguoiDaiDien",
    },
    {
      title: "Số điện thoại",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Loại KH",
      dataIndex: "LoaiKhachHang",
      key: "LoaiKhachHang",
    },
    // {
    //   title: "Tổng tiền",
    //   dataIndex: "tongtien",
    //   key: "tongtien",
    //   render: (tongtien: any) => (
    //     <>{tongtien?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
    //   ),
    // },
    // {
    //   title: "Đã thanh toán",
    //   dataIndex: "dathanhtoan",
    //   key: "dathanhtoan",
    //   render: (dathanhtoan: any) => (
    //     <>
    //       {dathanhtoan?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
    //     </>
    //   ),
    // },
    // {
    //   title: "Còn nợ",
    //   dataIndex: "conno",
    //   key: "conno",
    //   render: (conno: any) => (
    //     <>{conno?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</>
    //   ),
    // },
  ];

  // const rowSelection = {
  //   onChange: async (selectedRowKeys :any, selectedRows:any) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //     const newArr = [] as any
  //     await selectedRows.map((item: any)=>{
  //       newArr.push(item.ID)
  //     })
  //     setlistCustomerSelect(newArr);
  //   },
  //   onSelect: (record: any, selected: any, selectedRows: any) => {
  //     console.log(record, selected, selectedRows);
  //   },
  //   onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
  //     console.log(selected, selectedRows, changeRows);
  //   },
  // };

  const rowSelection = {
    selectedRowKeys,
    onChange: async (selectedRowKeys: any, selectedRows: any) => {
      console.log("selectedRowKeys", selectedRowKeys);

      setselectedRowKeys(selectedRowKeys);
      const newArr = [] as any;
      await selectedRows.map((item: any) => {
        newArr.push(item.ID);
      });
      setlistCustomerSelect(newArr);
    },
  };

  return (
    <div className="site-layout-content">
      <Breadcrumb style={{ margin: "16px 0px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách khách hàng đăng ký</Breadcrumb.Item>
      </Breadcrumb>
      {localStorage.getItem("permission") != "KETOAN" ? (
        <>
          <Link style={{ fontWeight: "bold" }} to="/add_customer">
            <Button
              style={{ float: "right", marginBottom: "10px" }}
              type="primary"
            >
              Thêm mới
            </Button>
          </Link>

          {listCustomerSelect.length > 0 ? (
            <Button
              style={{
                float: "right",
                marginBottom: "10px",
                marginRight: "10px",
              }}
              type="primary"
              onClick={() => {
                // dispatch(Action.act_deleteDB())
                if (listCustomerSelect.length > 0) {
                  dispatch(
                    Action.act_deleteCustomerRegister(listCustomerSelect)
                  );
                } else {
                  notification["warning"]({
                    message: "Warning",
                    description: "Chưa chọn",
                  });
                }
              }}
            >
              Xóa
            </Button>
          ) : null}
        </>
      ) : null}

      <Table
        rowSelection={{
          ...rowSelection,
        }}
        onRow={(r) => ({
          // onMouseEnter: () => updateEdit(r),
          onDoubleClick: () => onUpdate(r),
        })}
        dataSource={customers}
        columns={columns}
      />
    </div>
  );
}

export default ListCustomer;
