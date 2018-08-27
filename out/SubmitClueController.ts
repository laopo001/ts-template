import request from '../util/request';
import { MsaResp,  } from './type';
/**
 * H5表单
 */
export class SubmitClueController {
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
