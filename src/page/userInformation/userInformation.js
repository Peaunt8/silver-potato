
import { Form, Input, Button } from 'antd';
/*引入上传图片react*/
import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

/*设置上传图片的规则*/


/*设置文本框的展示大小*/
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 10,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} 是必要的!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const { TextArea } = Input;

const onChange1 = e => {
  console.log('Change:', e.target.value);
};

/*以下为测试*/
const UserInformation = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  /*文本框常量*/
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="部门/组织名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input showCount maxLength={15}/>
        </Form.Item>

        <Form.Item
          name={['user', 'introduction']}
          label="部门/组织介绍"
        >
          <Input.TextArea showCount maxLength={100}/>
        </Form.Item>
        {/*设置上传图片的模块*/}
        上传部门图片：
        <br/>
        <br/>
        <ImgCrop rotate>
          <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          >

            {/*规定可以上传照片的数量，此处规定为最多上传3张*/}
          {fileList.length < 3 && '+ Upload'}
          </Upload>
        </ImgCrop>
        <p style={{color:'red'}}>您最多可以上传3张照片!</p>
        <br/>
        <br/>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 5}}>
          <Button type="primary" htmlType="submit">
            保存信息
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserInformation;

