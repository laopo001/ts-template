import request from '../util/request';
import { MsaResp,  } from './type';
/**
 * H5表单
 */
export class SubmitClueController {
    /**
     * 查询汽车品牌
     */
    getCars(data: {
    }): Promise<MsaResp> {
        return request(`/cars`, {
            method: 'get',
        }, data);
    }
    /**
     * 查询意向品牌列表
     */
    getIntentList(data: {
    }): Promise<MsaResp> {
        return request(`/intentList`, {
            method: 'get',
        }, data);
    }
    /**
     * 提交表单
     */
    postOrders(data: {
        ip?: string, // ip
    }): Promise<MsaResp> {
        return request(`/orders`, {
            method: 'post',
        }, data);
    }
}
