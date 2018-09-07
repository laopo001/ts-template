import request from '../util/request';
import { APIResult, AppSearchResult, Developer, DevAuth, UserInfo,  } from './type';
/**
 * Developer Client
 */
export class DeveloperClient {
    /**
     * addSubUser
     */
    postDevAddSubUser(data: {
    }): Promise<APIResult> {
        return request(`/dev/addSubUser`, {
            method: 'post',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    getDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'get',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    headDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'head',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    postDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'post',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    putDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'put',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    deleteDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'delete',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    optionsDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'options',
        }, data);
    }
    /**
     * findAppInfoByDevIdAndAppName
     */
    patchDevAppInfo(data: {
        devId: number, // devId
        searchName?: string, // searchName
    }): Promise<AppSearchResult> {
        return request(`/dev/appInfo`, {
            method: 'patch',
        }, data);
    }
    /**
     * changeEmail
     */
    getDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'get',
        }, data);
    }
    /**
     * changeEmail
     */
    headDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'head',
        }, data);
    }
    /**
     * changeEmail
     */
    postDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'post',
        }, data);
    }
    /**
     * changeEmail
     */
    putDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'put',
        }, data);
    }
    /**
     * changeEmail
     */
    deleteDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'delete',
        }, data);
    }
    /**
     * changeEmail
     */
    optionsDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'options',
        }, data);
    }
    /**
     * changeEmail
     */
    patchDevChangeEmail(data: {
        email: string, // email
        id: number, // id
    }): Promise<APIResult> {
        return request(`/dev/changeEmail`, {
            method: 'patch',
        }, data);
    }
    /**
     * changeProfile
     */
    postDevChangeProfile(data: {
        companyName?: string, 
        contacter?: string, 
        id: number, // id
        mobile?: string, 
        qq?: string, 
    }): Promise<APIResult> {
        return request(`/dev/changeProfile`, {
            method: 'post',
        }, data);
    }
    /**
     * changePwd
     */
    postDevChangePwd(data: {
        cfmpassword?: string, 
        id: number, // id
        newpassword?: string, 
        password?: string, 
        vcode?: string, 
    }): Promise<APIResult> {
        return request(`/dev/changePwd`, {
            method: 'post',
        }, data);
    }
    /**
     * changePwdNew
     */
    postDevChangePwdNew(data: {
        devId?: number, 
        newpassword?: string, 
        password?: string, 
        token?: string, 
    }): Promise<APIResult> {
        return request(`/dev/changePwdNew`, {
            method: 'post',
        }, data);
    }
    /**
     * countDevAuth
     */
    getDevCountDevAuth(data: {
        devId: number, // devId
    }): Promise<any> {
        return request(`/dev/countDevAuth`, {
            method: 'get',
        }, data);
    }
    /**
     * countDevAuth
     */
    postDevCountDevAuthParam(data: {
    }): Promise<any> {
        return request(`/dev/countDevAuthParam`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevById
     */
    getDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'get',
        }, data);
    }
    /**
     * getDevById
     */
    headDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'head',
        }, data);
    }
    /**
     * getDevById
     */
    postDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevById
     */
    putDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'put',
        }, data);
    }
    /**
     * getDevById
     */
    deleteDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'delete',
        }, data);
    }
    /**
     * getDevById
     */
    optionsDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'options',
        }, data);
    }
    /**
     * getDevById
     */
    patchDevDevIdByDevId(data: {
        devId: number, // devId
    }): Promise<Developer> {
        return request(`/dev/devId/${data.devId}`, {
            method: 'patch',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    getDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'get',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    headDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'head',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    postDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    putDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'put',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    deleteDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'delete',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    optionsDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'options',
        }, data);
    }
    /**
     * getDevByDevKey
     */
    patchDevDevKeyByDevKey(data: {
        devKey: string, // devKey
    }): Promise<Developer> {
        return request(`/dev/devKey/${data.devKey}`, {
            method: 'patch',
        }, data);
    }
    /**
     * devList
     */
    postDevDevList(data: {
        param0?: object, // param0
    }): Promise<any> {
        return request(`/dev/devList`, {
            method: 'post',
        }, data);
    }
    /**
     * devListCount
     */
    postDevDevListCount(data: {
        param0?: object, // param0
    }): Promise<any> {
        return request(`/dev/devListCount`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevByDevName
     */
    getDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'get',
        }, data);
    }
    /**
     * getDevByDevName
     */
    headDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'head',
        }, data);
    }
    /**
     * getDevByDevName
     */
    postDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevByDevName
     */
    putDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'put',
        }, data);
    }
    /**
     * getDevByDevName
     */
    deleteDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'delete',
        }, data);
    }
    /**
     * getDevByDevName
     */
    optionsDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'options',
        }, data);
    }
    /**
     * getDevByDevName
     */
    patchDevDevNameByDevName(data: {
        devName: string, // devName
    }): Promise<Developer> {
        return request(`/dev/devName/${data.devName}`, {
            method: 'patch',
        }, data);
    }
    /**
     * getDevByEmail
     */
    getDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'get',
        }, data);
    }
    /**
     * getDevByEmail
     */
    headDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'head',
        }, data);
    }
    /**
     * getDevByEmail
     */
    postDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'post',
        }, data);
    }
    /**
     * getDevByEmail
     */
    putDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'put',
        }, data);
    }
    /**
     * getDevByEmail
     */
    deleteDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'delete',
        }, data);
    }
    /**
     * getDevByEmail
     */
    optionsDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'options',
        }, data);
    }
    /**
     * getDevByEmail
     */
    patchDevEmail(data: {
        email: string, // email
    }): Promise<Developer> {
        return request(`/dev/email`, {
            method: 'patch',
        }, data);
    }
    /**
     * getDevAuthByDevId
     */
    getDevGetDevAuthByDevId(data: {
        devId: number, // devId
    }): Promise<DevAuth> {
        return request(`/dev/getDevAuthByDevId`, {
            method: 'get',
        }, data);
    }
    /**
     * getPhoneNumberByAppkey
     */
    getDevGetPhoneNumberByAppkey(data: {
        appkey: string, // appkey
    }): Promise<any> {
        return request(`/dev/getPhoneNumberByAppkey`, {
            method: 'get',
        }, data);
    }
    /**
     * getSubUserList
     */
    getDevGetSubUserList(data: {
        parentId: number, // parentId
    }): Promise<any> {
        return request(`/dev/getSubUserList`, {
            method: 'get',
        }, data);
    }
    /**
     * getTotalDevCount
     */
    getDevGetTotalDevCount(data: {
        month: number, // month
    }): Promise<any> {
        return request(`/dev/getTotalDevCount`, {
            method: 'get',
        }, data);
    }
    /**
     * insertDevAuth
     */
    postDevInsertDevAuth(data: {
    }): Promise<any> {
        return request(`/dev/insertDevAuth`, {
            method: 'post',
        }, data);
    }
    /**
     * listAllEmail
     */
    getDevListAllEmail(data: {
        end?: number, // end
        start?: number, // start
    }): Promise<any> {
        return request(`/dev/listAllEmail`, {
            method: 'get',
        }, data);
    }
    /**
     * listDevAuthPage
     */
    postDevListDevAuthPage(data: {
    }): Promise<any> {
        return request(`/dev/listDevAuthPage`, {
            method: 'post',
        }, data);
    }
    /**
     * listNewDeveloper
     */
    getDevListNewDeveloper(data: {
        begindate: number, // begindate
        enddate: number, // enddate
    }): Promise<any> {
        return request(`/dev/listNewDeveloper`, {
            method: 'get',
        }, data);
    }
    /**
     * updateDevPermission
     */
    postDevPermissionUpdate(data: {
    }): Promise<any> {
        return request(`/dev/permission/update`, {
            method: 'post',
        }, data);
    }
    /**
     * queryMonthDevIds
     */
    getDevQueryMonthDevIds(data: {
        month: number, // month
    }): Promise<any> {
        return request(`/dev/queryMonthDevIds`, {
            method: 'get',
        }, data);
    }
    /**
     * register
     */
    postDevRegister(data: {
        companyName?: string, 
        contacter?: string, 
        email?: string, 
        forceLogin?: number, 
        from?: string, 
        ip?: string, 
        mobile?: string, 
        password?: string, 
        qq?: string, 
        userName?: string, 
    }): Promise<Developer> {
        return request(`/dev/register`, {
            method: 'post',
        }, data);
    }
    /**
     * removeSubUser
     */
    postDevRemoveSubUser(data: {
        subUserId: number, // subUserId
    }): Promise<any> {
        return request(`/dev/removeSubUser`, {
            method: 'post',
        }, data);
    }
    /**
     * searchByEmail
     */
    getDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'get',
        }, data);
    }
    /**
     * searchByEmail
     */
    headDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'head',
        }, data);
    }
    /**
     * searchByEmail
     */
    postDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'post',
        }, data);
    }
    /**
     * searchByEmail
     */
    putDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'put',
        }, data);
    }
    /**
     * searchByEmail
     */
    deleteDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'delete',
        }, data);
    }
    /**
     * searchByEmail
     */
    optionsDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'options',
        }, data);
    }
    /**
     * searchByEmail
     */
    patchDevSearch(data: {
        email: string, // email
    }): Promise<any> {
        return request(`/dev/search`, {
            method: 'patch',
        }, data);
    }
    /**
     * updateDevAuth
     */
    postDevUpdateDevAuth(data: {
    }): Promise<any> {
        return request(`/dev/updateDevAuth`, {
            method: 'post',
        }, data);
    }
    /**
     * updateDevForceType
     */
    postDevUpdateDevForceType(data: {
        devId: number, // devId
        forceType: string, // forceType
    }): Promise<any> {
        return request(`/dev/updateDevForceType`, {
            method: 'post',
        }, data);
    }
    /**
     * updateDeveloper
     */
    postDevUpdateDeveloper(data: {
        clientStatus?: string, 
        companyName?: string, 
        conferSure?: number, 
        config?: string, 
        contacter?: string, 
        devAuthCompanyName?: string, 
        devAuthEmail?: string, 
        devAuthName?: string, 
        devAuthPhoneNum?: string, 
        devKey?: string, 
        devSecret?: string, 
        email?: string, 
        emailCode?: string, 
        emailFlag?: number, 
        forceType?: number, 
        id?: number, 
        ipAddress?: string, 
        isActivation?: number, 
        isEnabled?: number, 
        lastUpdateTime?: string, 
        lastVisitPlatform?: string, 
        loginInfo?: string, 
        loginToken?: string, 
        loginTokenTime?: string, 
        loginType?: string, 
        loginValue?: string, 
        loginVerify?: number, 
        mobile?: string, 
        parentId?: number, 
        parentOrCurrentId?: number, 
        password?: string, 
        payRate?: number, 
        prov?: string, 
        qq?: string, 
        regDate?: string, 
        registerSource?: string, 
        username?: string, 
        verifyPhone?: string, 
    }): Promise<any> {
        return request(`/dev/updateDeveloper`, {
            method: 'post',
        }, data);
    }
    /**
     * updateDeveloperWithSource
     */
    postDevUpdateDeveloperWithSource(data: {
        fromIportal: boolean, // fromIportal
    }): Promise<any> {
        return request(`/dev/updateDeveloperWithSource`, {
            method: 'post',
        }, data);
    }
    /**
     * updateSubUserPassword
     */
    postDevUpdateSubUserPassword(data: {
        password: string, // password
        subUserId: number, // subUserId
    }): Promise<any> {
        return request(`/dev/updateSubUserPassword`, {
            method: 'post',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    getDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'get',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    headDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'head',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    postDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'post',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    putDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'put',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    deleteDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'delete',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    optionsDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'options',
        }, data);
    }
    /**
     * findUserInfoByDevId
     */
    patchDevUserInfoByDevId(data: {
        devId: number, // devId
    }): Promise<UserInfo> {
        return request(`/dev/userInfo/${data.devId}`, {
            method: 'patch',
        }, data);
    }
}
