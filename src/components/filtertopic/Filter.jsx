import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React, { useState } from "react";
import Highlighter from "react-highlight-words";

const NewFilter = (props) => {

  //data props
  const data = props.response;
  const catchData = props.catchData;
  const [propsData, setPropsData] = useState( data )

  // data search
  const [filteredData, setFilteredData] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectData, setSelectData] = useState('');
  // console.log(data);

  function handleSearch(event) {
    const newEvent = event;

    setSearchText(newEvent);
    const lowerCaseSearchText = searchText.toLowerCase();

    const newFilteredData = data.filter((item) => {
      return (
        item._id.toLowerCase().includes(lowerCaseSearchText) ||
        item.title.toLowerCase().includes(lowerCaseSearchText)
      );
    });
    setData(newEvent, newFilteredData)
  }

  function handleChange(event) {
    if(event !== ''){

      const newEvent = event;
  
      setSelectData(newEvent);
      const lowerCaseSelected = selectData.toLowerCase();
  
      const newSelect = data.filter((item) => {
        return (
          item._id.toLowerCase().includes(lowerCaseSelected) ||
          item.title.toLowerCase().includes(lowerCaseSelected)
        );
      });
      setData(newEvent, newSelect)
    }else{
      setSelectData('');
    }
  }

  const onClear = () => {
      setFilteredData('');
      setSelectData('');
      setSearchText('');
  };

  const setData = (newEvent, newFilter) => {
    if(newEvent!==''){
      setFilteredData(newFilter);
      catchData(newEvent, newFilter)
    }
    else{
      setFilteredData('');
      catchData('')
    }
      
  };

  return (
    <Select
      showSearch
      placeholder= {"Search Data"}
      onSearch={handleSearch}
      onChange={handleChange}
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
              searchWords={[searchText]}
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
