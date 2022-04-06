import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from 'react-router-dom';
import PersonalPage from '../personalPage/personalPage';
import MemberManagement from '../memberManagement/memberManagement';
import TeamActivity from '../teamActivity/teamActivity';
import TeamSignup from '../teamSignUp/teamSignUp';
import './index.css';

const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          {/* 左边菜单栏目录*/}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <div className="profile">
              <Avatar className='profile-avatar' size={64} icon={<UserOutlined />} />
              <div className="profile-info">
                <div className="profile-name">namename</div>
                <div className="profile-bio">biobio</div>
              </div>
            </div>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              {/* <Link to="/Homepage">个人中心</Link>*/}
              <Link to="/personal_page">个人中心</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/team_activity">组织活动管理中心</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="组织报名系统">
              <Menu.Item key="3">
                <Link to="/team_sign_up">部门资料填写</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/team_sign_up">用户报名信息</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<FileOutlined />}>
              <Link to="/member_management">组织人员管理</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout className="site-layout">
          <Layout.Header
            className="site-layout-background"
            style={{ padding: 0, color: 'dodgerblue', fontSize: 'x-large', margin: 14 }}
          >
            校园活动管理系统
          </Layout.Header>
          <Layout.Content style={{ margin: '0 16px ' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>人员</Breadcrumb.Item>
              <Breadcrumb.Item>名单</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
              <Routes>
                <Route path="/personal_page" element={<PersonalPage />} />
                <Route path="/member_management" element={<MemberManagement />} />
                <Route path="/team_activity" element={<TeamActivity />} />
                <Route path="/team_sign_up" element={<TeamSignup />} />
              </Routes>
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Campus activity management system｜created by liuyufeng
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}
