import { Breadcrumb } from "antd";
import React from "react";

const DetailReport = () => {
  return (
    <div className="site-layout-background">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Thread Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '10px 0'}} separator="&#62;">
                <Breadcrumb.Item className="breadcrumb-text">Manage Thread</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Thread Report</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Details Report</Breadcrumb.Item>
              </Breadcrumb>
              <div className="filter-thread">
              </div>
            </div>
            <div className="table-thread">
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
