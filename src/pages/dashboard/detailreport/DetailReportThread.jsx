import { Breadcrumb, Card, Skeleton } from "antd";
import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserPost } from "../../../components/cardpost/userPost/UserPost";
import { getThread } from "../../../store/thread/ThreadSlicer";

const DetailReportThread = () => {
  const param = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const response = useSelector((state) => state.thread);
  const loader = useSelector((state) => state.thread.fecthStatus);

  useEffect(() => {
    dispacth(getThread(param.id));
  }, []);

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Topic has been deleted.", "success");
        dispacth(deleteThread(id));
      }
    });
  };

  return (
    <div className="table">
      <div className="manage-thread-table detail">
        <div className="header-table">
          <div className="header-text">
            <span>Details Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item
                onClick={() => navigate("/dashboard/thread")}
                className="manageThread"
                style={{ cursor: "pointer" }}
              >
                Thread Report
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
                Details Report
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="body">
          {loader !== "loading" ? (
            <div className="details-thread">
              <UserPost response={response} />
            </div>
          ) : (
            <Card>
              <Skeleton
                avatar
                active
                className="skeleton"
                paragraph={{ width: 1200 }}
              ></Skeleton>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailReportThread;
