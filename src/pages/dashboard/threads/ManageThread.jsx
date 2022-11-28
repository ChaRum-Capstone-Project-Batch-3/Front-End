import { Breadcrumb } from "antd";
import React from "react";

const ManageThread = () => {
  return (
    <div className="site-layout-background">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Thread Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '16px 0'}} separator=">">
                <Breadcrumb.Item className="breadcrumb-text">Home</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">ManageThread</Breadcrumb.Item>
              </Breadcrumb>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ManageThread;
