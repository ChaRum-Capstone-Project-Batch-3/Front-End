import { Breadcrumb } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserPost from "../../../../components/cardpost/assets/UserPost";
import { getThread } from "../../../../store/thread/ThreadSlicer";

const DetailReport = () => {
  const param = useParams();
  const dispacth = useDispatch();
  const response = useSelector((state) => state.thread);
  useEffect(() => {
    dispacth(getThread(param.id));
  }, []);

  return (
    <div className="site-layout-background" style={{ padding: "0 100px" }}>
      <div className="content-main manage-thread">
        <div className="header" style={{ padding: "0px 155px" }}>
          <div className="header-text">
            <span>Details Report</span>
          </div>
          <div className="bread-crumb">
            <Breadcrumb separator="&#62;">
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
          <div className="details-thread">
            <UserPost response={response} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
