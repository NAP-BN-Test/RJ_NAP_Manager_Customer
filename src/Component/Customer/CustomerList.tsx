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
            {props.customers.map((customer, idx)=>{
                return (
                    <CustomerItem
                        key={idx}
                        customers = {customer}
                        toggleChangeStatus={props.toggleChangeStatus}
                        toggleEditDateTime ={props.toggleEditDateTime}
                        toggleEditNumberUser ={props.toggleEditNumberUser}
                        toggleDelete={props.toggleDelete}
                    />
                );
                
            })}
        </div>
    );
}

export default CustomerList;    