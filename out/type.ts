export interface ChangeLogsVO {
    amount: number, // 金额
    customerId: number, // 客户ID
    customerName: string, // 客户名称
    id: number, // 
    operType: string, // 操作类型
    operateTime: Timestamp, // 操作日期
    remark: string, // 备注
}
export interface ClueStaticsVO {
    allAdded: number, // 累计添加
    todayAdded: number, // 今日添加
}
export interface ClueVO {
    createTime: Timestamp, // 创建时间
    id: number, // 
    intent: string, // 意向品牌
    mobile: string, // 手机号
    name: string, // 姓名
    price: string, // 线索价格
    section: string, // 预算区间
}
export interface CustomerChangeLogsVO {
    amount: number, // 金额
    customerId: number, // 客户ID
    id: number, // ID
    operType: string, // 操作类型
    operateTime: Timestamp, // 日期
    remark: string, // 备注
}
export interface CustomerForm {
    address: string, // 详细地址
    area: string, // 区
    city: string, // 市
    email: string, // 联系人邮箱
    name: string, // 客户名称
    province: string, // 省
}
export interface CustomerStaticsVO {
    allAdded: number, // 累计添加
    todayAdded: number, // 今日添加
}
export interface CustomerVO {
    address: string, // 详细地址
    amount: number, // 账户金额
    area: string, // 区
    city: string, // 市
    createTime: Timestamp, // 创建时间
    email: string, // 联系人邮箱
    id: number, // 
    name: string, // 客户名称
    province: string, // 省
}
export interface FinanceManageVO {
    amount: number, // 账户金额
    createTime: Timestamp, // 创建日期
    customerId: number, // 客户id
    customerName: string, // 客户姓名
    id: number, // 
}
export interface MsaResp {
    code: number, // 
    data: object, // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespClueStaticsVO {
    code: number, // 
    data: ClueStaticsVO, // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespCustomerStaticsVO {
    code: number, // 
    data: CustomerStaticsVO, // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespListChangeLogsVO {
    code: number, // 
    data: ChangeLogsVO[], // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespListClueVO {
    code: number, // 
    data: ClueVO[], // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespListCustomerChangeLogsVO {
    code: number, // 
    data: CustomerChangeLogsVO[], // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespListCustomerVO {
    code: number, // 
    data: CustomerVO[], // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespListFinanceManageVO {
    code: number, // 
    data: FinanceManageVO[], // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface MsaRespdouble {
    code: number, // 
    data: number, // 
    message: string, // 
    ok: boolean, // 
    pageData: PageData, // 
}
export interface PageData {
    totalNumber: number, // 
    totalPage: number, // 
}
export interface Timestamp {
    date: number, // 
    day: number, // 
    hours: number, // 
    minutes: number, // 
    month: number, // 
    nanos: number, // 
    seconds: number, // 
    time: number, // 
    timezoneOffset: number, // 
    year: number, // 
}
export interface TransferForm {
    amount: number, // 转账金额，单位：元
    operType: string, // 操作类型
}
