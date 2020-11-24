import React from 'react';
import {Customer, toggleChangeStatus, toggleEditDateTime, toggleEditNumberUser,toggleDelete} from "../../types";
import CustomerItem from './CustomerItem';

interface PropsCustomerList{
    customers: Array<Customer>
    toggleChangeStatus: toggleChangeStatus,
    toggleEditDateTime: toggleEditDateTime,
    toggleEditNumberUser: toggleEditNumberUser,
    toggleDelete: toggleDelete
}

function CustomerList(props: PropsCustomerList) {
    return (
        <div>
            {props.customers.map((customer)=>{
                return (
                    <CustomerItem
                        customers = {customer}
                        toggleChangeStatus={props.toggleChangeStatus}
                        toggleEditDateTime ={props.toggleEditDateTime}
                        toggleEditNumberUser ={props.toggleEditNumberUser}
                        toggleDelete={props.toggleDelete}
                        // visible = {props.visibleModal}
                        // Id ={customer.Id}
                        // CompanyName={customer.CompanyName}
                        // DatabaseName={customer.DatabaseName}
                        // Status={customer.Status}
                        // Username={customer.Username}
                        // NoAccount={customer.NoAccount}
                        // DateExprired={customer.DateExprired}
                        // NoDayUpdate={customer.NoDayUpdate}
                    />
                );
            })}
        </div>
    );
}

export default CustomerList;    