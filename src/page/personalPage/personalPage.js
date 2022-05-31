import React,{useState} from 'react';
import { Form, Input, InputNumber, Button ,DatePicker, Space,Upload, Modal} from 'antd';
import "./personalPage.css"

import { PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/es/upload/interface';
import { RcFile, UploadProps } from 'antd/es/upload';

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const getBase64 = (file)=>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


export const PersonalPage = () =>{

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [isSubmit,setIsSubmit] = useState(false)
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const [showData,setShowData] = useState({
    email:'1111',
    introduction:'1111',
    time:[]
  })

  //上传图片相关
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || (file.preview));
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  //最后的提交
  const onFinish = (values) => {
    setIsSubmit(false)
      setShowData({
        email:values.user.email,
        introduction:values.user.introduction,
        time:values.user.time,
      })
      console.log('bks',showData,values);
  };
  const onChange = (values)=>{
    setIsSubmit(true)
  }
return (<div>
      <div className='personTitle'>工作备忘录</div>
      {
        !isSubmit?<Form {...layout} name="nest-messages" onFinish={onChange}>
        <Form.Item label="事件名称">
          <div>{showData.email}</div>
        </Form.Item>
        <Form.Item label="事件介绍">
        <div>{showData.introduction}</div>
        </Form.Item>
        <Form.Item  label="事件时间">
          <RangePicker />
        </Form.Item>
        <Form.Item label="相关图片">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            修改信息
          </Button>
        </Form.Item>
      </Form>
      :<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'email']} label="事件名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="事件介绍" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['user', 'pic']} label="相关图片">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          保存信息
        </Button>
      </Form.Item>
    </Form>
      }
    </div>)
}
export default PersonalPage;

