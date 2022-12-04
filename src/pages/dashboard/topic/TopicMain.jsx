import { Breadcrumb, Button, Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  EditFilled,
} from "@ant-design/icons";
import "./Topic.css";
import Meta from "antd/es/card/Meta";
import BusinessImage from "./Business.png";
import Search from "antd/es/transfer/search";
import ModalTopic from "./ModalTopic";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteTopic, getAllTopic } from "../../../store/topic/TopicSlicer";

const { Title } = Typography;
const TopicMain = () => {
  const dispacth = useDispatch();
  const data = useSelector((state) => state.topic);
  useEffect(() => {
    dispacth(getAllTopic());
  }, [dispacth]);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value) => console.log(value);

  const deleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispacth(deleteTopic(id));
        Swal.fire("Deleted!", "Topic has been deleted.", "success");
      }
    });
  };

  return (
    <div className="site-layout-background">
      <div
        className="content-main"
        style={{
          margin: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Breadcrumb
          style={{
            margin: "11px 0",
          }}
        >
          <Breadcrumb.Item
            onClick={() => navigate("/dashboard")}
            style={{ cursor: "pointer" }}
          >
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item>Topic</Breadcrumb.Item>
        </Breadcrumb>
        <div className="add-topic" onClick={() => setIsModalOpen(true)}>
          <PlusCircleOutlined />
          <Title level={3}>New Topic</Title>
          <Title level={5}>Create new topic</Title>
        </div>

        <div className="list-topic">
          <Title level={2} style={{ marginTop: "20px" }}>
            All Topic
          </Title>
          <div
            className="search-bar"
            style={{ width: "336px", margin: "10px 0" }}
          >
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            />
          </div>
          <div className="list-body">
            {data?.data.map((value) => (
              <div className="card-topic" key={value._id}>
                <Card
                  style={{
                    width: "250px",
                  }}
                  cover={<img alt="example" src={BusinessImage} />}
                >
                  <Meta title={value.topic} description={value.description} />
                  <div className="button-group">
                    <div
                      className="btn-edit"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <EditFilled /> Edit
                    </div>
                    <Button
                      type="primary"
                      danger
                      onClick={() => deleted(value._id)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <ModalTopic
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
        />
      </div>
    </div>
  );
};

export default TopicMain;
