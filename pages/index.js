import Head from "next/head";
import Link from "next/link";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

import styles from "../styles/Home.module.css";
import {OnlineAssessmentLayout} from '../components/layout/layout';

export default function Home() {

  const  Love = () =>{
    return <div><h1>Love comp</h1></div>
  }
  return (
    <>
    <OnlineAssessmentLayout
      children={<Love />}
    />
    </>
    )
    
}



