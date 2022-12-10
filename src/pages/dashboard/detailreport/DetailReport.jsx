import { Breadcrumb } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import  CardPost  from "../../../components/cardpost/CardPost";

const DetailReport = () => {
  const  param = useParams();

  return (
    <div className="detail-report">
      <div className="content-main manage-thread">
        <div className="header">
          <div className="header-text">
            <span>Details Report</span>
          </div>
            <div className="bread-crumb">
              <Breadcrumb style={{ margin: '10px 0'}} separator="&#62;">
                <Breadcrumb.Item className="breadcrumb-text">Manage Thread</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Thread Report</Breadcrumb.Item>
                <Breadcrumb.Item className= "manageThread">Details Report</Breadcrumb.Item>
              </Breadcrumb>
            </div>
        </div>
        <div className="body">
          <div className="details-thread">
              <CardPost props={param.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
