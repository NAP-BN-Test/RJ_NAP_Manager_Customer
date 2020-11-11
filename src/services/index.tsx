import { URL, secretKey } from "../assets/data/data";
import axios from 'axios';

function get_list_customer(req: any) {
    let body = {
        secretKey: secretKey,
        searchKey: req.searchKey,
        page: req.page
    }
    
    return axios.post(`${URL}/nap/get_list_customer`, body)
    .then((res)=>{
        return res.data
    })
    .catch(err => console.log(err)
    )
}

export const Services = {
    get_list_customer
}