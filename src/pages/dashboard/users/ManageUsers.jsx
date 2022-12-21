import { Breadcrumb, Skeleton } from "antd";
import React, { useState } from "react";
import UsersTable from "../../../components/table/UsersTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../store/users/UserSlicer";

const ManageUsers = () => {
  // state
  const [page, setPage] = useState(1);

  // data
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getAllUsers(page));
  }, [dispacth, page]);

  const response = useSelector((state) => state.user.data.users);
  const loader = useSelector((state) => state.user.fecthStatus);

  const navigate = useNavigate();
  return (
    <div className="table">
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Users Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                className="breadcrumb-text"
                onClick={() => navigate("/dashboard")}
                style={{ cursor: "pointer" }}
              >
                Users Report
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="filter-thread-table">
              {/* <div className="sort-topic">
                <Filter topic={filterTopic} />
              </div> */}
              {/* <div className="sort-reported">
                <Filter report={filterReported} />
              </div> */}
            </div>
          </div>
          {loader !== "loading" ? (
            <div className="table-thread">
              <UsersTable response={response.users} />
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
