import {API_BASE, HTTP_USER} from './../config';
import httpBase from '../http-base';


class HttpUser {
    async getUsers (){
        try{
            const url = `${ API_BASE }${HTTP_USER.getUsers}`;
            const data = await httpBase.baseGet(url,{});
            return data;
        } catch (error) {
            console.log(error);//TODO
        }
    }

    async getUserByToken(){
        try{
            const url = `${ API_BASE }${HTTP_USER.getUser}`;
            let token = 'dftg3Wdwlm1QpA06dewWfS1';
            const config = {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            }
            const data = await httpBase.baseGet(url,config);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpUser;