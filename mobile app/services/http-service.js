import * as _ from 'axios';

const BASE_URL = 'http://127.0.0.1:27018';

export async function get(url,options={}) {
    try {
        const response =  await _.get(`${BASE_URL}${url}`,{Headers:{'Content-Type': 'application/json'}});
        console.log(response.data)
        return response.data;
    } catch (e) {
        throw e;
    }
    
}

export async function post(url,body,options={}) {
    try {
        const response = await axios.post(`${BASE_URL}${url}`,body,options);
        return response
    }catch (e) {
        throw e;
    }
}

export async function put(url,body,options={}) {
    try {
        const response = await axios.put(`${BASE_URL}${url}`,body,options);
        return response
    }catch (e) {
        throw e;
    }
}

export async function del(url,body) {
    try {
        const response = await axios.delete(`${BASE_URL}${url}`,body);
        return response;
    } catch (e) {
        throw e;
    }
}