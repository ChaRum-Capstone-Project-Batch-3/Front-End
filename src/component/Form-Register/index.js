import React, { useState, useEffect } from "react";
import { Col, Form, Input, Row, Button, Image, Checkbox } from "antd";

export const Register = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);

  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  return (
    <>
      <div className="box">
        <Row className="row-main">
          <Col span={11} className="col-1">
            <Image />
          </Col>
          <Col span={13} className="col-2">
            <h1>Create new account</h1>
            <p>
              Already have an account?
              {/* <Link/> ini blm link Sign in nya */}
            </p>
            <Form
              form={form}
              name="basic"
              className="form-row"
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              size="small"
            >
              <Form.Item
                name="nickname"
                className="name"
                label={
                  <div className="col-12">
                    <p style={{ 'padding': '2px', 'border': '2px'}}>Halo</p>
                  </div>
                }
                rules={[
                  {
                    required: checkNick,
                    message: "Please input your username!",
                  },
                ]}
              >
                {/* <p>Name</p> */}
                <div className="col-12">
                  <Input
                    placeholder="Enter Your Name"
                    className="input-user"
                  />
                </div>
              </Form.Item>
              <Form.Item>
                <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                  Nickname is required
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="username"
                className="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <p>Email / Phone</p>
                <Input
                  placeholder="Enter Your Email or Phone Number"
                  className="input-user"
                />
              </Form.Item>
              <Form.Item
                name="username"
                className="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <p>Password</p>
                <Input
                  placeholder="Enter Your Password"
                  className="input-user"
                />
              </Form.Item>
              <Form.Item
                name="username"
                className="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <p>Confirm Password</p>
                <Input placeholder="Confirm Password" className="input-user" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  block
                  style={{ background: "#D1E6E0" }}
                  id="button-signup"
                >
                  SIGN UP
                </Button>
              </Form.Item>
              <div className="pilih-login">
                <Row className="row">
                  <Col span={24}>
                    <p>Or sign in with</p>
                  </Col>
                  <Col span={24}>{/* <p>Or sign in with</p> */}</Col>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>
        {/* Register */}
      </div>
    </>
  );
};
