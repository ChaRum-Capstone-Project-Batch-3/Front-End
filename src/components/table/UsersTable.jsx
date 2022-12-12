import React, { useState } from "react";
import { Button, Popover, Table } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../store/users/UserSlicer";
import Swal from "sweetalert2";

const UsersTable = (props) => {
  const data = props.response;
  const [infoKeyId, setInfoKeyId] = useState("");
  const isEditing = (record) => record.key === infoKeyId;
  const navigate = useNavigate();

  const dispacth = useDispatch();

  const getInfo = (record) => {
    setInfoKeyId(record.key);
  };
  //
  const handleDelete = (record) => {
    Swal.fire({
      title: `Are you sure want to delete ${record.userName}?`,
      text: " You can’t restore this user in other time.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          record.userName + " has been deleted.",
          "success"
        );
        dispacth(deleteUser(record._id));
      }
    });
  };
  //
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: "5%",
      align: "center",
    },
    {
      title: "Username",
      dataIndex: "userName",
      width: "10%",
      align: "center",
    },
    {
      title: "Followers",
      dataIndex: "email",
      width: "12%",
      align: "center",
    },
    {
      title: "Thread Amount",
      dataIndex: "socialMedia",
      width: "10%",
      align: "center",
    },
    {
      title: "Report Amount",
      dataIndex: "createdAt",
      width: "10%",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "operation",
      width: "10%",
      align: "center",
      render: (text, record) => {
        const infoDetail = isEditing(record);

        // return record.followers?
        // null : (

        return (
          <>
            <Popover
              defaultOpen={infoDetail}
              content={
                <div style={{ display: "grid" }}>
                  <Button
                    onClick={() => {
                      dispacth(getUser(record._id));
                      navigate("/dashboard/users/details/" + record._id);
                    }}
                    type="text"
                    style={{ marginBottom: "10px", background: "#D1E6E0" }}
                  >
                    <InfoCircleOutlined />
                    Details
                  </Button>
                  <Button type="text" onClick={() => handleDelete(record)}>
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
  return (
    <Table
      bordered
      dataSource={data}
      columns={columns}
      rowClassName="editable-row"
      rowKey="_id"
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  );
};
export default UsersTable;
