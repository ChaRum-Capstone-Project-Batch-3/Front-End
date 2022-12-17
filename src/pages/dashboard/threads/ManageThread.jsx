import { Breadcrumb, Input, Skeleton, Table } from "antd";
import React, { useState } from "react";
import ThreadTable from "../../../components/table/ThreadTable";
import Filter from "../../../components/filtertopic/Filter";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllThread } from "../../../store/thread/ThreadSlicer";


const ManageThread = () => {
  // state
  const [page, setPage] = useState(1);

  // data
  const dispacth = useDispatch();
  const response = useSelector((state) => state.thread);

  useEffect(() => {
    dispacth(getAllThread(page));
  }, [dispacth]);

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
                <Filter
                response={response.data?.threads}
                />
              </div>
              <div className="sort-reported">
              </div>
            </div>
          </div>
          <div className="table-thread">
            {response?.fecthStatus !== "loading" ? (
              <ThreadTable
                response={response.data?.threads}
                page={page}
                setPage={setPage}
              />
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageThread;
