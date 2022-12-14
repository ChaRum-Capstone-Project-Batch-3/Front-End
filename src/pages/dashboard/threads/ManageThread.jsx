import { Breadcrumb, Input, Skeleton, Table } from "antd";
import React, { useState } from "react";
import ThreadTable from "../../../components/table/ThreadTable";
import Filter from "../../../components/filtertopic/Filter";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllThread } from "../../../store/thread/ThreadSlicer";

const data = [
  {
    key: "1",
    name: "John Doe",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  // Dan seterusnya...
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const ManageThread = () => {
  // state
  const [filterTopic, setFilterTopic] = useState(true);
  const [filterReported, setFilterReported] = useState(true);
  const [page, setPage] = useState(1);

  // data
  const dispacth = useDispatch();

  const response = useSelector((state) => state.thread);

  useEffect(() => {
    dispacth(getAllThread(page));
  }, [dispacth]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");

  function handleSearch(event) {
    setSearchText(event.target.value);

    // console.log(searchText);

    if (searchText === "") {
      return data;
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    // Penyaringan data sesuai dengan teks yang dimasukkan pengguna
    const newFilteredData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(lowerCaseSearchText) ||
        item.address.toLowerCase().includes(lowerCaseSearchText)
      );
    });

    setFilteredData(newFilteredData);
  }

  const navigate = useNavigate();
  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Thread Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                className="breadcrumb-text"
                onClick={() => navigate("/dashboard")}
                style={{ cursor: "pointer" }}
              >
                Manage Thread
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="manageThread"
                onClick={() => navigate("/thread")}
                style={{ cursor: "pointer" }}
              >
                Thread Report
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="filter-thread-table">
              <div className="sort-topic">
                <Filter topic={filterTopic}/>
              </div>
              <div className="sort-reported">
                <Filter report={filterReported}/>
              </div>
            </div>
          </div>
          <div className="table-thread">
            {response?.fecthStatus !== "loading" ? (
              <ThreadTable
                response={response.data?.threads}
                page={page}
                setPage={setPage}
                searchText={searchText}
              />
            ) : (
              <Skeleton active />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageThread;
