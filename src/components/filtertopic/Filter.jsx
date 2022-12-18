import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const useDounce = (data, ms) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(data);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [data, ms]);
  return value;
};

const Filter = (props) => {
  const [_text, setTopic] = useState("");
  const text = useDounce(_text, 1000);
  console.log(props.response);

  useEffect(() => {
    if (text !== "") {
      props.setData(
        props.response.filter(
          (val) =>
            val.topic.topic.toLowerCase() === text.toLowerCase() ||
            val.topic.topic.toLowerCase().match(text.toLowerCase()) ||
            val.title.toLowerCase() === text.toLowerCase() ||
            val.title.toLowerCase().match(text.toLowerCase()) ||
            val.creator.userName.toLowerCase() === text.toLowerCase() ||
            val.creator.userName.toLowerCase().match(text.toLowerCase())
        )
      );
    } else {
      props.setData(props.response);
    }
  }, [text, props]);

  const onChangeHandler = (e) => {
    setTopic(e.target.value);
  };
  return (
    // <Select
    //   showSearch
    //   onChange={onChangeHandler}
    //   style={{
    //     width: 200,
    //   }}
    //   allowClear="clearIcon"
    //   placeholder={props.topic ? "Search By Topic" : "Search By Reported"}
    //   optionFilterProp="children"
    //   filterOption={(input, option) => (option?.label ?? "").includes(input)}
    //   filterSort={(optionA, optionB) =>
    //     (optionA?.label ?? "")
    //       .toLowerCase()
    //       .localeCompare((optionB?.label ?? "").toLowerCase())
    //   }
    //   options={[
    //     {
    //       value: "1",
    //       label: "Not Identified",
    //     },
    //     {
    //       value: "2",
    //       label: "Closed",
    //     },
    //     {
    //       value: "3",
    //       label: "Communicated",
    //     },
    //     {
    //       value: "4",
    //       label: "Identified",
    //     },
    //     {
    //       value: "5",
    //       label: "Resolved",
    //     },
    //     {
    //       value: "6",
    //       label: "Cancelled",
    //     },
    //   ]}
    // />
    <Input
      placeholder="Search"
      onChange={onChangeHandler}
      prefix={<SearchOutlined />}
    />
    // <input type="text" placeholder="search topic" onChange={onChangeHandler} />
  );
};
export default Filter;
