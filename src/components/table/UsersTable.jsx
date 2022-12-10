import React, { useState } from "react";
import {
  Button,
  Popover,
  Table,
} from "antd";
import {
  InfoCircleOutlined, DeleteOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i,
    name: `User Edrward ${i}`,
    followers: 32,
    address: `London Park no. ${i}`,
  });
}

const UsersTable = (props) => {

  console.log(props);
  const value = props.response.data;

  console.log(value);
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
  // 
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      width: "5%",
      align: "center",
    },
    {
      title: "Username",
      dataIndex: "name",
      width: "10%",
      align: "center",
    },
    {
      title: "Followers",
      dataIndex: "followers",
      width: "12%",
      align: "center",
    },
    {
      title: "Thread Amount",
      dataIndex: "address",
      width: "10%",
      align: "center",
    },
    {
      title: "Report Amount",
      dataIndex: "address",
      width: "10%",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      align: "center",
      editable: true,
      render: (_, record) => {
        const infoDetail = isEditing(record);
        
        console.log(record);

        return (
          <>
            {
              infoDetail ? 
                <Popover
                defaultOpen = {infoDetail}
                content={
                <div style={{ 'display' : 'grid' }}>
                  <Link to={`details/${JSON.stringify(record)}`}>
                    <Button 
                    type="text" 
                    style={{ 'marginBottom' : '10px', 'background' : '#D1E6E0'}}
                    >
                      <InfoCircleOutlined />Details
                    </Button>
                  </Link>
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
      <Table
        bordered
        dataSource={
          // props.response?.data? 
          // value 
          // :
          // null
          data
        }
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          position: ["bottomCenter"]
        }}
      />
  );
};
export default UsersTable;
