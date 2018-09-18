import {API_BASE, HTTP_USER, HTTP_PRODUCT} from '../config';
import httpBase from '../http-base';


class HttpProduct {
    async getProducts (){
        try{
            const url = `${ API_BASE }${HTTP_PRODUCT.getCatalog}`;
            const data = await httpBase.baseGet(url,{});
            return data;
        } catch (error) {
            console.log(error);//TODO
        }
    }

    async getProductById(_id){
        try{
            const url = `${ API_BASE }${HTTP_PRODUCT.getProduct}/${_id}`;
            const data = await httpBase.baseGet(url,{});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpProduct;