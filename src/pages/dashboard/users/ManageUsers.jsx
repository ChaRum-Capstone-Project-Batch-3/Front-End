import { Breadcrumb } from "antd";
import React, { useState } from "react";
import UsersTable from "../../../components/table/UsersTable";
import Filter from "../../../components/filtertopic/Filter";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllThread } from "../../../store/thread/ThreadSlicer";

const ManageUsers = () => {

  // state
  const [filterTopic, setFilterTopic] = useState(true);
  const [filterReported, setFilterReported] = useState(true);

  // data
  const dispacth = useDispatch();
  const response = useSelector((state) => state.thread);

  useEffect(() => {
    dispacth(getAllThread());
  }, [dispacth]);

  const navigate = useNavigate();
  return (
    <div className="site-layout-background">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Users Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '10px 0'}} separator="&#62;">
                <Breadcrumb.Item 
                  className="breadcrumb-text"
                  onClick={() => navigate("/dashboard")}
                  style={{ cursor: "pointer" }}
                  >
                  Manage Thread</Breadcrumb.Item>
                <Breadcrumb.Item 
                  className= "manageThread"
                  onClick={() => navigate("/thread")}
                  style={{ cursor: "pointer" }}
                >
                  Thread Report</Breadcrumb.Item>
              </Breadcrumb>
              <div className="filter-thread">
                <div className="sort-topic">
                  <Filter topic={filterTopic}/>
                </div>
                <div className="sort-reported">
                  <Filter report={filterReported}/>
                </div>
              </div>
            </div>
            <div className="table-thread">
              <UsersTable
                response={response}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
