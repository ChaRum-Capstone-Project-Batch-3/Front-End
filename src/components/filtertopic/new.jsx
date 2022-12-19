import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import Highlighter from "react-highlight-words";

// set interval

const useDounce = (data, ms) => {
  const [value, setValue] = useState('');
  useEffect(()=>{
    const handler = setTimeout(()=>{
      setValue(data);
    }, ms)
    return () => {
      clearTimeout(handler);
    };
  }, [data, ms])
  return value;
}

const NewFilter = (props) => {

  // data props
  const data = props.response;
  const catchData = props.catchData;

  // data search
  const [filteredData, setFilteredData] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectData, setSelectData] = useState('');

  // interval Value
  const text = useDounce(searchText, 500)

  useEffect(() => {
    if(searchText !== ''){
      const lowerCaseSearchText = searchText.toLowerCase();

      const newFilteredData = data.filter((item) => {
        return (
          item._id.toLowerCase().includes(lowerCaseSearchText) ||
          item.title.toLowerCase().includes(lowerCaseSearchText) ||
          item.creator.userName.toLowerCase().includes(lowerCaseSearchText) ||
          item.topic.topic.toLowerCase().includes(lowerCaseSearchText) ||
          moment(item.createdAt).format("ll").toLowerCase().includes(lowerCaseSearchText)
        );
      });
      catchData(searchText, newFilteredData)
      console.log('masuk');
    }
    // if(selectData !== ''){
      
    //   const lowerCaseSearchText = selectData.toLowerCase();

    //   const newFilteredData = data.filter((item) => {
    //     return (
    //       item._id.toLowerCase().includes(lowerCaseSearchText) ||
    //       item.title.toLowerCase().includes(lowerCaseSearchText) ||
    //       item.creator.userName.toLowerCase().includes(lowerCaseSearchText) ||
    //       item.topic.topic.toLowerCase().includes(lowerCaseSearchText) ||
    //       moment(item.createdAt).format("ll").toLowerCase().includes(lowerCaseSearchText)
    //     );
    //   });
    //   catchData(selectData, newFilteredData)
    // }
    else{
      catchData('')
    }
  }, [text])
  

  const handleSearch = (event) => {
    const newEvent = event;
    setSearchText(newEvent);
  }

  const handleChange = (event) => {
    const newEvent = event;
    setSelectData(newEvent);
  }

  const onClear = () => {
    setSelectData('');
    setSearchText('');
    setFilteredData('');
  };

  return (
    <Select
      showSearch
      placeholder= {"Search Data"}
      onSearch={handleSearch}
      // onChange={handleChange}
      style={{ width: 200 }}
      allowClear={<ClearOutlined/>}
      onClear={onClear}
      value={filteredData.title}
    >
      {data?.map((item) => (
        <Select.Option key={item._id} value={item.title}>
          {
            <Highlighter
              highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
              searchWords={[searchText? searchText : selectData]}
              autoEscape
              textToHighlight={item.title.toString()}
            />
          }
        </Select.Option>
      ))}
    </Select>
  );
};
export default NewFilter;
