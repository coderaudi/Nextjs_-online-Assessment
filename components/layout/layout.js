import React, { memo, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Link from 'next/link';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./layout.module.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const OnlineAssessmentLayout = memo((props) => {
  const [collapsSidebar, setCollapsSidebar] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsSidebar(collapsed);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh", background: "red" }}>
        <Sider collapsible collapsed={collapsSidebar} onCollapse={onCollapse}>
          <div className="logo">
            <img
              src="https://bankingthefuture.com/wp-content/uploads/2019/04/dummylogo.jpg"
              width="200px"
              height="64px"
            />
          </div>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
             <Link href="/exam/create"> Creat Exam</Link>
            </Menu.Item>
 <Menu.Item key="9" icon={<FileOutlined />}>
             <Link href="/exam/paper">exam</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className={styles.omg}
            //  className="site-layout-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ??2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
});

export { OnlineAssessmentLayout };
