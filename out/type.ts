export interface APIResult {
    code: number; // 
    data: object; // 
    message: string; // 
}
export interface ApiAdmin {
    enabled: boolean; // 
    limit: number; // 
}
export interface AppBase {
    appKey: string; // 
    appRate: number; // 
    appleVerifyErrcode: number; // 
    appleVerifyTestErrcode: number; // 
    certificateFileName: string; // 
    createTime: string; // 
    enableFlag: number; // 
    iosKey: number; // 
    isVipApp: number; // 
    name: string; // 
    pkg: string; // 
    platform: string; // 
    proVerifyCode: number; // 
    richpushPmsnState: number; // 
    stage: number; // 
    testVerifyCode: number; // 
}
export interface AppGroupBaseVo {
    appGroupDesc: string; // 
    appGroupId: number; // 
    appGroupKey: string; // 
    appGroupName: string; // 
    defaultFlag: number; // 
}
export interface AppSearchResult {
    appGroups: AppGroupBaseVo[]; // 
    apps: AppBase[]; // 
}
export interface ChangeLogsVO {
    amount: number; // 金额
    customerId: number; // 客户ID
    customerName: string; // 客户名称
    id: number; // 
    operType: string; // 操作类型
    operateTime: Timestamp; // 操作日期
    remark: string; // 备注
}
export interface ClueStaticsVO {
    allAdded: number; // 累计添加
    todayAdded: number; // 今日添加
}
export interface ClueVO {
    createTime: Timestamp; // 推送时间
    id: number; // 
    intent: string; // 意向品牌
    mobile: string; // 手机号
    name: string; // 姓名
    price: number; // 线索价格
    section: string; // 预算区间
}
export interface CustomerChangeLogsVO {
    amount: number; // 金额
    customerId: number; // 客户ID
    id: number; // ID
    operType: string; // 操作类型
    operateTime: Timestamp; // 日期
    remark: string; // 备注
}
export interface CustomerForm {
    address: string; // 详细地址
    area: string; // 区
    city: string; // 市
    email: string; // 联系人邮箱
    name: string; // 客户名称
    province: string; // 省
}
export interface CustomerStaticsVO {
    allAdded: number; // 累计添加
    todayAdded: number; // 今日添加
}
export interface CustomerVO {
    address: string; // 详细地址
    amount: number; // 账户金额
    area: string; // 区
    city: string; // 市
    createTime: Timestamp; // 创建时间
    email: string; // 联系人邮箱
    id: number; // 
    name: string; // 客户名称
    province: string; // 省
}
export interface DevAuth {
    auditUserName: string; // 
    certificateType: string; // 
    createDate: string; // 
    devId: string; // 
    devName: string; // 
    devType: number; // 
    email: string; // 
    id: number; // 
    idBackImg: string; // 
    idFaceImg: string; // 
    idHandImg: string; // 
    idNum: string; // 
    licenceImg: string; // 
    phoneNum: string; // 
    realName: string; // 
    refuseReason: string; // 
    remark: string; // 
    sessionId: string; // 
    status: number; // 
}
export interface DevAuthListParam {
    devId: number; // 
    devName: string; // 
    devType: number; // 
    endTime: string; // 
    pageIndex: number; // 
    pageSize: number; // 
    phoneNum: string; // 
    startTime: string; // 
    status: number; // 
}
export interface Developer {
    clientStatus: string; // 
    companyName: string; // 
    conferSure: number; // 
    configObject: UserConfig; // 
    contacter: string; // 
    devAuthCompanyName: string; // 
    devAuthEmail: string; // 
    devAuthName: string; // 
    devAuthPhoneNum: string; // 
    devKey: string; // 
    devSecret: string; // 
    email: string; // 
    emailCode: string; // 
    emailFlag: number; // 
    forceType: number; // 
    id: number; // 
    ipAddress: string; // 
    isActivation: number; // 
    isEnabled: number; // 
    lastUpdateTime: string; // 
    lastVisitPlatform: string; // 
    loginInfo: string; // 
    loginToken: string; // 
    loginTokenTime: string; // 
    loginType: string; // 
    loginValue: string; // 
    loginVerify: number; // 
    mobile: string; // 
    parentId: number; // 
    password: string; // 
    payRate: number; // 
    prov: string; // 
    qq: string; // 
    regDate: string; // 
    registerSource: string; // 
    username: string; // 
    verifyPhone: string; // 
}
export interface EmailValidateInfo {
    bindCustom: boolean; // 
    register: boolean; // 
    userInfo: object; // 开发者信息
}
export interface FileImportForm {
    url: string; // 文件链接
}
export interface FinanceManageVO {
    amount: number; // 账户金额
    createTime: Timestamp; // 创建日期
    customerId: number; // 客户id
    customerName: string; // 客户姓名
    id: number; // 
}
export interface MsaResp {
    code: number; // 
    data: object; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespClueStaticsVO {
    code: number; // 
    data: ClueStaticsVO; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespCustomerStaticsVO {
    code: number; // 
    data: CustomerStaticsVO; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespEmailValidateInfo {
    code: number; // 
    data: EmailValidateInfo; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespListChangeLogsVO {
    code: number; // 
    data: ChangeLogsVO[]; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespListClueVO {
    code: number; // 
    data: ClueVO[]; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespListCustomerChangeLogsVO {
    code: number; // 
    data: CustomerChangeLogsVO[]; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespListCustomerVO {
    code: number; // 
    data: CustomerVO[]; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespListFinanceManageVO {
    code: number; // 
    data: FinanceManageVO[]; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespSMSResult {
    code: number; // 
    data: SMSResult; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespUserVO {
    code: number; // 
    data: UserVO; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface MsaRespdouble {
    code: number; // 
    data: number; // 
    message: string; // 
    ok: boolean; // 
    pageData: PageData; // 
}
export interface OrderForm {
    area: string; // 区
    city: string; // 城市
    intent: string; // 意向品牌
    ip: string; // 
    mobile: string; // 手机号码
    msgId: string; // 短信ID
    name: string; // 客户名称
    origin: string; // 来源
    section: string; // 价格区间
    verifyCode: string; // 验证码
}
export interface PageData {
    totalNumber: number; // 
    totalPage: number; // 
}
export interface Permission {
    ad: number; // 
    antiFraud: number; // 
    devId: number; // 
    iapp: number; // 
    im: number; // 
    izone: number; // 
    push: number; // 
    sms: number; // 
}
export interface SMSResult {
    code: number; // 
    error: string; // 
    msg_id: string; // 
}
export interface SubUserRegisterForm {
    contacter: string; // 
    email: string; // 
    parentId: number; // 
    password: string; // 
    username: string; // 
}
export interface SwitchConfig {
    enabled: boolean; // 
}
export interface Timestamp {
    date: number; // 
    day: number; // 
    hours: number; // 
    minutes: number; // 
    month: number; // 
    nanos: number; // 
    seconds: number; // 
    time: number; // 
    timezoneOffset: number; // 
    year: number; // 
}
export interface TransferForm {
    amount: number; // 转账金额，单位：元
    operType: string; // 操作类型
}
export interface UserConfig {
    api_admin: ApiAdmin; // 
    exchange: SwitchConfig; // 
    push_config: SwitchConfig; // 
    segment: SwitchConfig; // 
}
export interface UserInfo {
    dev: Developer; // 
    isSubUser: boolean; // 
    unreadCount: number; // 
}
export interface UserVO {
    accountType: number; // 
    advertiserNum: string; // 
    checkInfo: string; // 
    checkStatus: string; // 
    companyId: number; // 
    companyName: string; // 
    createTime: string; // 
    cuid: number; // 
    customerId: number; // 客户ID
    devKey: string; // 
    devSecret: string; // 
    email: string; // 
    isAdUser: boolean; // 
    loginVerify: number; // 
    mobile: string; // 
    modifyTime: string; // 
    observer: number; // 
    qq: string; // 
    realName: string; // 
    roleId: number; // 
    status: number; // 
    ticketId: string; // 
    uid: number; // 
    username: string; // 
}
