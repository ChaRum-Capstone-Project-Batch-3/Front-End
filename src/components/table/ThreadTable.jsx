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
import Highlighter from 'react-highlight-words';

const ThreadTable = (props) => {

  const value = props.response;
  const searchText = props.searchText;
  // console.log(value);

  const [infoKeyId, setInfoKeyId] = useState("");
  const isEditing = (record) => record.key === infoKeyId;

  const getInfo = (record) => {
    // console.log(record);
    setInfoKeyId(record.key);
  };
  // 
  const cancelDetail = (record) => {
    // console.log(record);
    setInfoKeyId('');
  };
  // 
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
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      )
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
      render: text => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      )
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
          
          // console.log(record);
  
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
          )}
    }
  ];

  return (
      <Table
        bordered
        dataSource={
          // props.response?.data? 
          // value 
          // :
          // null
          value
        }
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          position: ["bottomCenter"]
        }}
      />
  );
};
export default ThreadTable;
