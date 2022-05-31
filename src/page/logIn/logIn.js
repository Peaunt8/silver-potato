import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link, Route, Routes} from "react-router-dom";
import SiderDemo from "../siderDemo/siderDemo";
import { UserOutlined, LockOutlined, BarcodeOutlined } from '@ant-design/icons';
import { hashHistory } from 'react-router';
import './logIn.css'

const LogIn = (props) => {
  const [isJump,setIsJump] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)
  const onFinish = (values) => {
    console.log('Success:', values);
    setIsSubmit(true)
  };

  useEffect(()=>{
    if(isSubmit){
      setIsJump(true)
    }
  },[isSubmit])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-box">
        <div className="login-min">
            <div className="avatar_box">
                <img src="./logo192.png" alt="" />
            </div>
            <Form name="normal_login" className="login-form" onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]} className="username" >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" size="large"/>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]} >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" size="large" />
                </Form.Item>
                <Form.Item>
                  {
                    isJump?<Link to="/siderDemo">
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large"> 登录
                    </Button>
                    </Link>:
                    <Button type="primary" htmlType="submit" className="login-form-button" size="large"> 登录</Button>
                  }
                </Form.Item>
            </Form>
        </div>
    </div>
)

  // return (

  //   /*定义登录表单的样式*/
  //   <Form
  //     name="basic"
  //     labelCol={{
  //       span: 8,
  //     }}
  //     wrapperCol={{
  //       span: 8,
  //     }}
  //     initialValues={{
  //       remember: true,
  //     }}
  //     onFinish={onFinish}
  //     onFinishFailed={onFinishFailed}
  //     autoComplete="off"
  //   >
  //     <Form.Item
  //       label="账号"
  //       name="username"
  //       rules={[
  //         {
  //           required: true,
  //           message: '请输入账号!',
  //         },
  //       ]}
  //     >
  //       <Input />
  //     </Form.Item>

  //     <Form.Item
  //       label="密码"
  //       name="password"
  //       rules={[
  //         {
  //           required: true,
  //           message: '请输入密码！',
  //         },
  //       ]}
  //     >
  //       <Input.Password />
  //     </Form.Item>

  //     <Form.Item
  //       name="remember"
  //       valuePropName="checked"
  //       wrapperCol={{
  //         offset: 10,
  //         span: 16,
  //       }}
  //     >
  //       <Checkbox>记住账号及密码</Checkbox>
  //     </Form.Item>

  //     <Form.Item
  //       wrapperCol={{
  //         offset: 11,
  //         span: 16,
  //       }}
  //     >
  //       {/*登录成功后路由链接至后台主页面*/}
  //       <Link to="/siderDemo">
  //       <Button type="primary" htmlType="submit">
  //         登录
  //         <Routes>
  //           <Route path="/siderDemo" element={<SiderDemo />} />
  //         </Routes>
  //       </Button>
  //       </Link>
  //     </Form.Item>
  //   </Form>

  // );
};


export default LogIn;
