import request from '../util/request';
import { MsaRespListCustomerVO, MsaResp, MsaRespUserVO, MsaRespCustomerStaticsVO,  } from './type';
/**
 * 客户管理
 */
export class CustomerController {
    /**
     * 查询所有客户信息
     */
    getCustomers(data: {
        dateEnd?: string, // 结束日期，日期格式yyyy-MM-dd
        dateEndValue?: string, 
        dateStart?: string, // 开始日期，日期格式yyyy-MM-dd
        dateStartValue?: string, 
        page?: number, // 页码，从1开始
        search?: string, // 搜索内容
        size?: number, // 每页数量，默认10条
        status?: string, // status
    }): Promise<MsaRespListCustomerVO> {
        return request(`/customers`, {
            method: 'get',
        }, data);
    }
    /**
     * 创建客户
     */
    postCustomers(data: {
    }): Promise<MsaResp> {
        return request(`/customers`, {
            method: 'post',
        }, data);
    }
    /**
     * 查询客户信息
     */
    getCustomersInfo(data: {
    }): Promise<MsaRespUserVO> {
        return request(`/customers/info`, {
            method: 'get',
        }, data);
    }
    /**
     * 查询客户统计信息
     */
    getCustomersStatics(data: {
    }): Promise<MsaRespCustomerStaticsVO> {
        return request(`/customers/statics`, {
            method: 'get',
        }, data);
    }
}
