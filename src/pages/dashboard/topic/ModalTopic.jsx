import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const defaultData = {
  title: "",
  description: "",
  img: "",
};

const ModalTopic = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(defaultData);
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: "vertical",
        }}
      >
        <Form.Item style={{ fontWeight: "600" }} label="Topic Title">
          <Input
            placeholder="Write the title here.."
            value={data.title}
            name="title"
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item style={{ fontWeight: "600" }} label="TextArea">
          <TextArea
            rows={4}
            name="description"
            placeholder="Write the descriptions.."
            value={data.description}
            onChange={onChangeHandler}
          />
        </Form.Item>
        <Form.Item style={{ fontWeight: "600" }} label="Upload Picture">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalTopic;
