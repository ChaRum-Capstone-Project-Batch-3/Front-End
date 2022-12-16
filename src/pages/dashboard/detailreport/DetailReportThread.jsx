import { Breadcrumb, Card, Skeleton } from "antd";
import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { UserPost} from "../../../components/cardpost/userPost/UserPost";
import { deleteThread, getThread } from "../../../store/thread/ThreadSlicer";
import Swal from "sweetalert2";

const DetailReportThread = () => {
  const param = useParams();
  const dispacth = useDispatch();
  const response = useSelector((state) => state.thread);
  const loader = useSelector((state) => state.thread.fecthStatus);

  useEffect(() => {
    dispacth(getThread(param.id));
  }, []);

  console.log(param.id)
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
      <div className="content-main manage-thread-table">
        <div className="header-table">
          <div className="header-text">
            <span>Details Report</span>
          </div>
          <div className="bread-crumb-table">
            <Breadcrumb style={{ margin: "10px 0" }} separator="&#62;">
              <Breadcrumb.Item className="breadcrumb-text">
                Manage Thread
              </Breadcrumb.Item>
              <Breadcrumb.Item className="manageThread">
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
              <UserPost 
                response={response}
                onDeleteHandler={onDeleteHandler} 
              />
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
