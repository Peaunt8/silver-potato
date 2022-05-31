import { Table,Button } from 'antd';
import React from 'react';

var XLSX = require("xlsx");;

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '学号',
    dataIndex: 'age',
  },
  {
    title: '联系电话',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class TeamSignUp extends React.Component {
  state = {
    dataList:[],
    selectedRowKeys: [], // Check here to configure the default column
  };

  openDownloadDialog(url, saveName) {
    if (typeof url === 'object' && url instanceof Blob) {
      url = URL.createObjectURL(url); // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    let event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
      );
    }
    aLink.dispatchEvent(event);
  }
  
  sheet2blob(sheet, sheetName) {
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    sheetName = sheetName || 'sheet1';
    const workbook = {
      SheetNames: [sheetName],
      Sheets: {},
    };
    workbook.Sheets[sheetName] = sheet;
    // 生成excel的配置项
    const wopts = {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary',
    };
    const wbout = XLSX.write(workbook, wopts);
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  
    // 字符串转ArrayBuffer
    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xff;
      }
      return buf;
    }
  
    return blob;
  }
  
  exportExcel = () => {
     const { dataList } = this.state; // 导出数据源
     
     const excelData = [
        [
          'AppName',
          'Category',
          'Topic/Interface',
          'EventCode/Method',
          'PassCount',
          'FailCount',
          'TotalCount',
          'PassRate',
        ],
      ];
      dataList.forEach(item=>{
        const list=[item.appName, item.cateGory, item.topic, item.code, item.passCount, item.failCount, item.total, item.paaRate]
       excelData.push(list)
     })
     const sheet = XLSX.utils.aoa_to_sheet(excelData);
     this.openDownloadDialog(this.sheet2blob(sheet), "test-details.xlsx");
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
    <div>
      <Button type="primary" htmlType="submit" onClick={this.exportExcel}>下载表格</Button>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
    );
  }
}

export default TeamSignUp;
