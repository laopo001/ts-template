import request from '../util/request';
import { MsaRespListClueVO, MsaRespClueStaticsVO,  } from './type';
/**
 * 线索管理
 */
export class ClueController {
    /**
     * 查询客户所有的线索信息
     */
    getCustomersByCustomerIdLeads(data: {
        customerId: number, // customerId
        dateEnd?: string, // 结束日期，日期格式yyyy-MM-dd
        dateEndValue?: string, 
        dateStart?: string, // 开始日期，日期格式yyyy-MM-dd
        dateStartValue?: string, 
        page?: number, // 页码，从1开始
        search?: string, // 搜索内容
        size?: number, // 每页数量，默认10条
        status?: string, // status
    }): Promise<MsaRespListClueVO> {
        return request(`/customers/${data.customerId}/leads`, {
            method: 'get',
        }, data);
    }
    /**
     * 导出客户所有的线索信息
     */
    getCustomersByCustomerIdLeadsExport(data: {
        customerId: number, // customerId
        dateEnd?: string, // 结束日期，日期格式yyyy-MM-dd
        dateEndValue?: string, 
        dateStart?: string, // 开始日期，日期格式yyyy-MM-dd
        dateStartValue?: string, 
        search?: string, // 搜索内容
        status?: string, // status
    }): Promise<MsaRespListClueVO> {
        return request(`/customers/${data.customerId}/leads/export`, {
            method: 'get',
        }, data);
    }
    /**
     * 查询客户线索统计信息
     */
    getCustomersByCustomerIdLeadsStatics(data: {
        customerId: number, // customerId
    }): Promise<MsaRespClueStaticsVO> {
        return request(`/customers/${data.customerId}/leads/statics`, {
            method: 'get',
        }, data);
    }
}
