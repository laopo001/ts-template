import * as React from 'react';
import { Route } from 'dva/router';
import { withRouter } from "react-router-dom";
import { UserManagement } from "../userManagement/userManagement";
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

interface history {
    push: (url: string) => void
}
interface HistoryProps {
    history: history
}

class ISider extends React.Component<HistoryProps> {
    state = {
        collapsed: false,
    };
    componentDidMount() {

    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    onSelect({ item, key, selectedKeys }) {
        // console.log(item, key, selectedKeys)
        this.props.history.push(key);
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    // collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div style={{
                        height: 32,
                        margin: 16,
                        color: '#fff',
                        textAlign: 'center',
                        lineHeight: '32px'
                    }}>统一管理中心</div>
                    <Menu theme="dark" onSelect={this.onSelect.bind(this)} defaultSelectedKeys={['/UserManagement']} mode="inline" defaultOpenKeys={['sub1']}>

                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>权限管理</span></span>}
                        >
                            <Menu.Item key="/UserManagement">用户管理</Menu.Item>
                            <Menu.Item key="2">角色管理</Menu.Item>
                            <Menu.Item key="3">平台管理</Menu.Item>
                            <Menu.Item key="4">菜单管理</Menu.Item>
                            <Menu.Item key="5">资源管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Route exact path="/UserManagement" component={UserManagement} />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

export const App = withRouter(connect(({ count }) => ({
    count
}))(ISider));