import request from '../util/request';
import { MsaRespdouble, MsaResp, MsaRespListFinanceManageVO, MsaRespListChangeLogsVO,  } from './type';
/**
 * iportal财务管理
 */
export class FinanceController {
    /**
     * 查询客户资金信息
     */
    getCustomersByCustomerIdFinanceBalance(data: {
        customerId: number, // customerId
    }): Promise<MsaRespdouble> {
        return request(`/customers/${data.customerId}/finance/balance`, {
            method: 'get',
        }, data);
    }
    /**
     * 转入/转出客户资金
     */
    postCustomersByCustomerIdFinanceTransfer(data: {
        customerId: number, // customerId
        uid?: number, // uid
    }): Promise<MsaResp> {
        return request(`/customers/${data.customerId}/finance/transfer`, {
            method: 'post',
        }, data);
    }
    /**
     * 查询所有客户的资金信息
     */
    getFinance(data: {
        page?: number, // 页码，从1开始
        search?: string, // 搜索内容
        size?: number, // 每页数量，默认10条
    }): Promise<MsaRespListFinanceManageVO> {
        return request(`/finance`, {
            method: 'get',
        }, data);
    }
    /**
     * 查询所有客户的财务记录
     */
    getFinanceLogs(data: {
        dateEnd?: string, // 结束日期，日期格式yyyy-MM-dd
        dateEndValue?: string,
        dateStart?: string, // 开始日期，日期格式yyyy-MM-dd
        dateStartValue?: string,
        operTypes?: string[], // 操作类型
        page?: number, // 页码，从1开始
        search?: string, // search
        size?: number, // 每页数量，默认10条
    }): Promise<MsaRespListChangeLogsVO> {
        return request(`/finance/logs`, {
            method: 'get',
        }, data);
    }
}
