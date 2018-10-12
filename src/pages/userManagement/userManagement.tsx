import * as React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

class IUserManagement extends React.Component
 {
    state = {
        collapsed: false,
    };
    render() {
        return <Button>123</Button>
    }
}

export const UserManagement = connect(({ count }) => ({
    count
}))(IUserManagement);