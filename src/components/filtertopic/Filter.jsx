import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React, { useState } from "react";
import Highlighter from "react-highlight-words";

const NewFilter = (props) => {

  //data props
  const data = props.response;
  const [propsData, setPropsData] = useState( data )

  // data search
  const [filteredData, setFilteredData] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectData, setSelectData] = useState('');
  // console.log(filteredData);

  function handleSearch(event) {
    const newEvent = event;

    setSearchText(newEvent);
    console.log(searchText)
    
    const lowerCaseSearchText = searchText.toLowerCase();

    const newFilteredData = data.filter((item) => {
      return (
        item._id.toLowerCase().includes(lowerCaseSearchText) ||
        item.title.toLowerCase().includes(lowerCaseSearchText)
      );
    });
    clearData(newEvent, newFilteredData)
  }

  function handleChange(event) {
    const newEvent = event;

    setSelectData(newEvent);
    const lowerCaseSelected = selectData.toLowerCase();

    const newSelect = data.filter((item) => {
      return (
        item._id.toLowerCase().includes(lowerCaseSelected) ||
        item.title.toLowerCase().includes(lowerCaseSelected)
      );
    });
    // if(filteredData!==""){
    //   setFilteredData('')
    // }
    clearData(newEvent, newSelect)
  }

  const onClear = () => {
      setFilteredData('');
      setSelectData('');
      setSearchText('');
  };

  const clearData = (newEvent, newFilter) => {
    if(newEvent!==''){
      setFilteredData(newFilter);
    }
    else{
      setFilteredData('');
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
