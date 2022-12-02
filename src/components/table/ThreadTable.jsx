import React, { useState } from "react";
import {
  Button,
  Form,
  Popover,
  Table,
} from "antd";
import {
  InfoCircleOutlined, DeleteOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const originData = ([{}]);
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const ThreadTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [infoKeyId, setInfoKeyId] = useState("");
  const isEditing = (record) => record.key === infoKeyId;

  const getInfo = (record) => {
    console.log(record);
    setInfoKeyId(record.key);
  };
  // 
  const cancelDetail = (record) => {
    console.log(record);
    setInfoKeyId('');
  };
  
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Username",
      dataIndex: "name",
      width: "12%",
    },
    {
      title: "Thread Title",
      dataIndex: "age",
      width: "15%",
    },
    {
      title: "Topic",
      dataIndex: "address",
      width: "10%",
    },
    {
      title: "Report Amount",
      dataIndex: "address",
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      editable: true,
      render: (_, record) => {
        const infoDetail = isEditing(record);

        return (
          <>
            {
              infoDetail ? 
                <Popover
                defaultOpen = {infoDetail}
                content={
                <div style={{ 'display' : 'grid' }}>
                  <Button 
                  type="text" 
                  style={{ 'marginBottom' : '10px', 'background' : '#D1E6E0'}} 
                  onClick={
                    <Link to="/users">
                    </Link>
                  }
                  >
                    <InfoCircleOutlined />Details
                  </Button>
                  <Button 
                  type="text" 
                  onClick={() => cancelDetail()}>
                    <DeleteOutlined />Delete
                  </Button>
                </div>
              }
                destroyTooltipOnHide
                >
                  <Button
                  disabled={infoKeyId === ""}
                  onClick={() => cancelDetail()}
                  type={'text'}
                  >
                    &#x2022; &#x2022; &#x2022;
                  </Button>
                </Popover>
              : 
                <Button
                  disabled={infoKeyId !== ""}
                  onClick={() => getInfo(record)}
                  type={'text'}
                >
                  &#x2022; &#x2022; &#x2022;
                </Button>
            }
          </>
        )
      },
    },
  ];
  //
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        getInfo
      }),
    };
  });
  //
  return (
    <Form form={form} component={false}>
      <Table
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          position: ["bottomCenter"]
        }}
      />
    </Form>
  );
};
export default ThreadTable;
