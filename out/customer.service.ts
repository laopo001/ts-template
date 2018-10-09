import request from '../util/request';
import { MsaRespListCustomerVO, MsaResp, MsaRespCustomerStaticsVO, MsaRespCustomerVO, MsaRespEmailValidateInfo,  } from './type';
/**
 * iportal客户管理
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
        address: string, // 详细地址
        area: string, // 区
        city: string, // 市
        email: string, // 联系人邮箱
        name: string, // 客户名称
        province: string, // 省
        uid: number, // uid
        username: string, // 用户名
    }): Promise<MsaResp> {
        return request(`/customers`, {
            method: 'post',
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
    /**
     * 查询客户信息
     */
    getCustomersById(data: {
        id: number, // id
    }): Promise<MsaRespCustomerVO> {
        return request(`/customers/${data.id}`, {
            method: 'get',
        }, data);
    }
    /**
     * 更新客户信息
     */
    putCustomersById(data: {
        address: string, // 详细地址
        area: string, // 区
        city: string, // 市
        email: string, // 联系人邮箱
        name: string, // 客户名称
        province: string, // 省
        uid: number, // uid
        username: string, // 用户名
        id: number, // id
    }): Promise<MsaResp> {
        return request(`/customers/${data.id}`, {
            method: 'put',
        }, data);
    }
    /**
     * 根据邮箱搜索用户
     */
    getUsersSearch(data: {
        email?: string, // 邮箱
    }): Promise<MsaRespEmailValidateInfo> {
        return request(`/users/search`, {
            method: 'get',
        }, data);
    }
}
