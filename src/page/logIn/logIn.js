import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {Link, Route, Routes} from "react-router-dom";
import SiderDemo from "../siderDemo/siderDemo";

const LogIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    /*定义登录表单的样式*/
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入账号!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Checkbox>记住账号及密码</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 16,
        }}
      >
        {/*登录成功后路由链接至后台主页面*/}
        <Link to="/siderDemo">
        <Button type="primary" htmlType="submit">
          登录
          <Routes>
            <Route path="/siderDemo" element={<SiderDemo />} />
          </Routes>
        </Button>
        </Link>
      </Form.Item>
    </Form>

  );
};


export default LogIn;
