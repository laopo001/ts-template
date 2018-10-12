import * as React from 'react';
import { connect } from 'dva';
import { Button, Input, Table, Tag, Divider } from 'antd';
const Search = Input.Search;

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '邮箱',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '启用的角色',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];


class IUserManagement extends React.Component {
    state = {
        collapsed: false,
    };
    query = {
        search: ''
    };
    render() {
        return (
            <div>
                <Search
                    placeholder="请输入姓名、邮箱"
                    onSearch={value => this.query.search = value}
                    style={{ width: 200 }}
                />
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export const UserManagement = connect(({ count }) => ({
    count
}))(IUserManagement);