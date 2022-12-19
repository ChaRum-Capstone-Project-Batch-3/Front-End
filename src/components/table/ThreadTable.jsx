import React from "react";
import { Button, Popover, Table } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteThread, getThread } from "../../store/thread/ThreadSlicer";
import moment from "moment";
import "moment/locale/id";
import Swal from "sweetalert2";
import Highlighter from "react-highlight-words";

const ThreadTable = (props) => {
  const searchText = props.searchData
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Topic has been deleted.", "success");
        dispacth(deleteThread(id));
      }
    });
  };
  //
  const columns = [
    {
      title: "#",
      dataIndex: "_id",
      key: "_id",
      width: "5%",
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
      title: "Username",
      dataIndex: "creator",
      render: val => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={val.userName.toString()}
        />
      ),
      width: "12%",
    },
    {
      title: "Thread Title",
      dataIndex: "title",
      width: "15%",
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
      title: "Topic",
      dataIndex: "topic",
      render: val => (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={val.topic.toString()}
        />
      ),
      width: "10%",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (val) => {
        moment.locale("id");
        return (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={moment(val).format("ll").toString()}
        />
        )
      },
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      editable: true,
      render: (_, record) => {
        return (
          <>
            <Popover
              content={
                <div style={{ display: "grid" }}>
                  <Button
                    type="text"
                    style={{ marginBottom: "10px", background: "#D1E6E0" }}
                    onClick={() => {
                      dispacth(getThread(record._id));
                      navigate("/dashboard/thread/details/" + record._id);
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
              <Button type={"text"}>&#x2022; &#x2022; &#x2022;</Button>
            </Popover>
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
      dataSource={props?.response}
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
