import request from '../util/request';
import { MsaResp,  } from './type';
/**
 * Files Import Controller
 */
export class FilesImportController {
    /**
     * list
     */
    getLeadsFiles(data: {
        page?: number, // 页码，从1开始
        search?: string, // search
        size?: number, // 每页数量，默认10条
    }): Promise<MsaResp> {
        return request(`/leads/files`, {
            method: 'get',
        }, data);
    }
    /**
     * create
     */
    postLeadsFiles(data: {
        uid?: number, // uid
    }): Promise<MsaResp> {
        return request(`/leads/files`, {
            method: 'post',
        }, data);
    }
    /**
     * delete
     */
    deleteLeadsFilesById(data: {
        id: number, // id
        uid: number, // uid
    }): Promise<MsaResp> {
        return request(`/leads/files/${data.id}`, {
            method: 'delete',
        }, data);
    }
}
