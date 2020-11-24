import {
  CalendarFilled,
  EditFilled, PauseCircleFilled, PlayCircleFilled, RestFilled
} from "@ant-design/icons";
import { Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import { convert_date } from "../../assets/utils";
import {
  Customer,
  toggleChangeStatus,
  toggleDelete,
  toggleEditDateTime,
  toggleEditNumberUser
} from "../../types";
import './Customer.css';
interface PropsCustomerItem {
  customers: Customer;
  toggleChangeStatus: toggleChangeStatus;
  // visible: boolean
  toggleEditNumberUser: toggleEditNumberUser,
  toggleEditDateTime: toggleEditDateTime;
  toggleDelete: toggleDelete
}

function CustomerItem(props: PropsCustomerItem) {
  

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const [dateValue, setDateValue] = useState('');
  const [numberUser, setNumberUser] = useState('');
  const [deleteValue, setDeLeteValue] = useState("");

  //Bắt đầu Sự kiên date
  function onChangeDate(e: any){
    setDateValue(e.target.value);
  }

  function okDate(){
    setVisible1(false)
    props.toggleEditDateTime(props.customers.Id, dateValue);

  }

  function onClickDate(){
    setVisible(false);
    setVisible1(true);
  }

  //Kết thúc sự kiện date

  //Bắt đầu sự kiện user
  function onChangeUser(e: any){
    setNumberUser(e.target.value);
  }

  function onClickUser(){
    setVisible(false);
    setVisible2(true);
  }

  function okUser(){
    setVisible2(false)
    props.toggleEditNumberUser(props.customers.Id, props.customers.DatabaseName, props.customers.Username,parseFloat(numberUser), props.customers.CompanyName );
  }


  function onClickDelete(){
    setVisible(false);
    setVisible3(true);
  }

  function okDelete(){
    setVisible3(false);
    if(deleteValue ===  props.customers.DatabaseName){
      props.toggleDelete(props.customers.DatabaseName, props.customers.Username, props.customers.Id);
    }else{
      Modal.info({
        title: 'Xóa Database không thành công!',
        content: (
          <div>
            Nhập đúng tên Database
          </div>
        ),
        onOk() {},
      });
    }
  }

  function onChangeDelete(e: any){
    setDeLeteValue(e.target.value);
  }


  return (
    <>
      <div className="RowCustomer">
        <Row
          gutter={[16, 16]}
          onClick={() => setVisible(true)}
          style={{ cursor: "pointer", border: "1" }}
        >
          <Col span={24} style={{ fontWeight: "bold" }}>
            {props.customers.CompanyName}
          </Col>

          <Col span={8}>Database: {props.customers.DatabaseName}</Col>
          <Col span={8}>userDB: {props.customers.Username}</Col>
          <Col span={8}>
            Trạng Thái:{" "}
            <span style={{ color: props.customers.Status ? "green" : "red" }}>
              {" "}
              {props.customers.Status ? "Đang hoạt động" : "Đã dừng"}{" "}
            </span>
          </Col>
          <Col span={8}>Số lượng account: {props.customers.NoAccount}</Col>
          <Col span={8}>Ngày hết hạn: {props.customers.DateExprired}</Col>
          <Col span={8}>Ngày cập nhật: {convert_date(props.customers.NoDayUpdate)}</Col>
        </Row>
      </div>
      <Modal
        footer={null}
        title={props.customers.CompanyName}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={200}
      >
        <p
          onClick={() =>
            props.toggleChangeStatus(props.customers.Id, props.customers.Status)
          }
          style={{ cursor: "pointer" }}
        >
          {props.customers.Status ? (
            <PauseCircleFilled
              style={{ marginRight: "15px", fontSize: "15px" }}
            />
          ) : (
            <PlayCircleFilled
              style={{ marginRight: "15px", fontSize: "15px" }}
            />
          )}
          {props.customers.Status ? "Tạm dừng dịch vụ" : "Tiếp tục dịch vụ"}
        </p>
        <p onClick={() => onClickDate()} style={{ cursor: "pointer" }}>
          <CalendarFilled style={{ marginRight: "15px", fontSize: "15px" }} />
          Sửa ngày hết hạn
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => onClickUser()}
        >
          <EditFilled style={{ marginRight: "15px", fontSize: "15px" }} />
          Sửa số lượng user
        </p>
        <p onClick={() => onClickDelete()} 
        style={{ cursor: "pointer" }}>
          <RestFilled style={{ marginRight: "15px", fontSize: "15px" }} />
          Xóa Database
        </p>
      </Modal>

      <Modal
        title="Ngày hết hạn"
        centered
        visible={visible1}
        onOk={() => okDate()}
        onCancel={() => setVisible1(false)}
        width={200}
      >
        <Input onChange={onChangeDate}/> 
        {/* <DatePicker onChange={onChangeDate} /> */}
      </Modal>

      <Modal
        title="Thay đổi số lượng user"
        centered
        visible={visible2}
        onOk={() => okUser()}
        onCancel={() => setVisible2(false)}
        width={200}
      >
        <Input onChange={onChangeUser}/> 
      </Modal>


      <Modal
        title={"Xóa"+ " "+props.customers.DatabaseName}
        centered
        visible={visible3}
        onOk={() => okDelete()}
        onCancel={() => setVisible3(false)}
        width={200}
      >
        <Input placeholder="Nhập đúng tên DB"  onChange={onChangeDelete}/> 
      </Modal>
      
    </>
    
  );
}

export default CustomerItem;
