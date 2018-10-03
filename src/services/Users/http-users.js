import {API_BASE, HTTP_USER} from './../config';
import httpBase from '../http-base';


class HttpUser {

    async getLogin (config){
        try{
            const url = `${ API_BASE }${HTTP_USER.getLogin}`;
            const data = await httpBase.baseGet(url,config);
            return data;
        } catch (error) {
            console.log('Error en getLogin()');
            console.log(error);//TODO
        }
    }
    async getUsers (){
        try{
            const url = `${ API_BASE }${HTTP_USER.getUsers}`;
            const data = await httpBase.baseGet(url,{});
            return data;
        } catch (error) {
            console.log(error);//TODO
        }
    }

    async getUserByToken(token){
        try{
            const url = `${ API_BASE }${HTTP_USER.getUser}`;
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