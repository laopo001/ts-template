import request from '../util/request';
import { MsaRespobject, MsaResp,  } from './type';
/**
 * iportal线索导入管理
 */
export class FilesImportController {
    /**
     * 获取私有下载链接
     */
    getDownloadUrlByUrl(data: {
        url: string, // url
    }): Promise<MsaRespobject> {
        return request(`/downloadUrl/${data.url}`, {
            method: 'get',
        }, data);
    }
    /**
     * 查询线索导入记录
     */
    getLeadsFiles(data: {
        page?: number, // 页码，从1开始
        search?: string, // 搜索内容
        size?: number, // 每页数量，默认10条
    }): Promise<MsaResp> {
        return request(`/leads/files`, {
            method: 'get',
        }, data);
    }
    /**
     * 导入线索文件
     */
    postLeadsFiles(data: {
    }): Promise<MsaResp> {
        return request(`/leads/files`, {
            method: 'post',
        }, data);
    }
    /**
     * 删除线索导入记录
     */
    deleteLeadsFilesById(data: {
        id: number, // id
    }): Promise<MsaResp> {
        return request(`/leads/files/${data.id}`, {
            method: 'delete',
        }, data);
    }
    /**
     * 获取七牛上传链接和token
     */
    getQiniuUpload(data: {
    }): Promise<MsaRespobject> {
        return request(`/qiniu/upload`, {
            method: 'get',
        }, data);
    }
}
