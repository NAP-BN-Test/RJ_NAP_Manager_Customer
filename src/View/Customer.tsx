import { Breadcrumb } from 'antd';
import { Action } from "../redux/actions/index.action";
import React from 'react';
import AddCustomer from '../Component/Customer/AddCustomer';
import { AddNewCustomer} from "../types";
import { useDispatch } from 'react-redux';

function Customer() {
    const dispatch = useDispatch();

    const AddNewCustomer: AddNewCustomer = (customerName: string, numberUser: number, duration: string, username: string, password: string, dbName: string) => {
        dispatch(Action.act_accCustomerDB(customerName, numberUser, duration, username, password, dbName));
    };
    return (
        <div className="site-layout-content">
            <Breadcrumb style={{margin: "16px 0px"}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
            </Breadcrumb>
            <AddCustomer 
                AddNewCustomer={AddNewCustomer} 
            />
        </div>
    );
}

export default Customer;