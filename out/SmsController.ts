import request from '../util/request';
import { MsaRespSMSResult,  } from './type';
/**
 * Sms Controller
 */
export class SmsController {
    /**
     * 发送短信验证码
     */
    getSendSMS(data: {
        mobile?: string, // 手机号
    }): Promise<MsaRespSMSResult> {
        return request(`/sendSMS`, {
            method: 'get',
        }, data);
    }
}
