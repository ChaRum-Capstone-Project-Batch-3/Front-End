import { Button, Form, Input, Modal, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const defaultData = {
  title: "",
  description: "",
  img: "",
};
const regexName = /^[A-Za-z ]*$/;

const ModalTopic = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(defaultData);
  const [errorMessages, setErrorMessages] = useState({
    title: false,
    description: false,
    img: false,
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [e.target.name]: e.target.value });
    if (name === "title") {
      if (regexName.test(value) && value !== "") {
        setErrorMessages({
          ...errorMessages,
          title: false,
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          title: true,
        });
      }
    }
    if (name === "description") {
      if (value !== "") {
        setErrorMessages({
          ...errorMessages,
          description: false,
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          description: true,
        });
      }
    }
  };
  return (
    <Modal
      open={props.isModalOpen}
      onOk={
        !errorMessages.title && !errorMessages.description
          ? props.handleOk
          : "disable"
      }
      onCancel={props.handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          layout: "vertical",
        }}
      >
        <Form.Item
          label="Topic Title"
          validateStatus={!errorMessages.title ? "" : "error"}
          help={
            !errorMessages.title
              ? ""
              : "Should be combination alphabets and required"
          }
          style={{ fontWeight: "600" }}
        >
          <Input
            placeholder="Write the title here.."
            value={data.title}
            name="title"
            onChange={onChangeHandler}
            required={true}
          />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: "600" }}
          label="TextArea"
          validateStatus={!errorMessages.description ? "" : "error"}
          help={!errorMessages.description ? "" : "required deskripsi"}
          hasFeedback
        >
          <TextArea
            rows={4}
            name="description"
            placeholder="Write the descriptions.."
            value={data.description}
            onChange={onChangeHandler}
            allowClear
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
