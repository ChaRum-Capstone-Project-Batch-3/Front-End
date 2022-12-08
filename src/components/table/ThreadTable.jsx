import React, { useState } from "react";
import { Button, Popover, Table } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteThread, getThread } from "../../store/thread/ThreadSlicer";

const ThreadTable = (props) => {
  const response = useSelector((state) => state?.thread.data.threads);
  const [infoKeyId, setInfoKeyId] = useState("");
  const isEditing = (record) => record.key === infoKeyId;
  const navigate = useNavigate();
  const dispacth = useDispatch();
  console.log("response ", response);

  const getInfo = (record) => {
    setInfoKeyId(record.key);
  };
  //
  const cancelDetail = (record) => {
    setInfoKeyId("");
  };

  const onDeleteHandler = (id) => {
    dispacth(deleteThread(id));
    cancelDetail();
  };
  //
  const columns = [
    {
      title: "#",
      dataIndex: "_id",
      key: "_id",
      width: "5%",
    },
    {
      title: "Username",
      dataIndex: "creator",
      render: (val) => val.userName,
      width: "12%",
    },
    {
      title: "Thread Title",
      dataIndex: "title",
      width: "15%",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      render: (data) => data.topic,
      width: "10%",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
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
            {infoDetail ? (
              <Popover
                defaultOpen={infoDetail}
                content={
                  <div style={{ display: "grid" }}>
                    <Button
                      type="text"
                      style={{ marginBottom: "10px", background: "#D1E6E0" }}
                      onClick={() => {
                        dispacth(getThread(record._id));
                        navigate("/dashboard/thread/" + record._id);
                      }}
                    >
                      <InfoCircleOutlined />
                      Details
                    </Button>
                    <Button
                      type="text"
                      onClick={() => onDeleteHandler(record._id)}
                    >
                      <DeleteOutlined />
                      Delete
                    </Button>
                  </div>
                }
                destroyTooltipOnHide
              >
                <Button
                  disabled={infoKeyId === ""}
                  onClick={() => cancelDetail()}
                  type={"text"}
                >
                  &#x2022; &#x2022; &#x2022;
                </Button>
              </Popover>
            ) : (
              <Button
                disabled={infoKeyId !== ""}
                onClick={() => getInfo(record)}
                type={"text"}
              >
                &#x2022; &#x2022; &#x2022;
              </Button>
            )}
          </>
        );
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
        title: col.title,
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
        response
      }
      columns={mergedColumns}
      rowClassName="editable-row"
      rowKey={(val) => val._id}
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  );
};
export default ThreadTable;
