import { Avatar, Breadcrumb, Card, Image, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const DetailReport = () => {
  return (
    <div className="site-layout-background">
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
              <Card
                className="card"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70}}
              >
                <div className="card-header">
                  <Avatar
                  size={{ md: 38, lg: 40, xl: 60, xxl: 60 }}
                  src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                  />
                  <div className="header-title">
                    <h3> Edwin </h3>
                    <p> Saturday, 20 of August 2022 </p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <div className="content-class">
                      Education
                    </div>
                    Earth Is Flat
                  </div>
                  <Image
                  className="image"
                  src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  preview={false}
                  sizes={{ xs: 24, sm: 32, md: 40, lg: 54, xl: 60 }}
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias error id corporis iste culpa maiores? In, atque inventore temporibus distinctio dicta quos nemo magnam, corrupti neque ad accusamus explicabo!
                    Fugit, delectus voluptatem! Obcaecati inventore officia omnis asperiores tenetur autem recusandae numquam temporibus. Provident id porro enim, ipsam explicabo dignissimos. Vero libero quibusdam quia possimus iure, consequatur dolorum vel asperiores?
                    Quidem ducimus cupiditate obcaecati ad reprehenderit, voluptatibus aut non vitae animi fugit nobis dignissimos quisquam accusantium veritatis possimus. Eligendi sed officiis rem consequatur voluptatem cum ullam ipsum reprehenderit dignissimos voluptatibus!
                    Delectus numquam quod amet. Tenetur rem optio eaque nam provident deleniti! Pariatur facilis odit sequi optio ex, sint reprehenderit autem necessitatibus quasi deserunt obcaecati ducimus quam asperiores deleniti est tenetur!
                    Vero consectetur eveniet autem blanditiis vel tempore sequi distinctio officia nemo. Architecto eaque tempora ex in veritatis alias dolorum nesciunt excepturi labore doloremque mollitia dignissimos, nisi quibusdam molestiae explicabo praesentium.
                  </p>
                </div>
                {/* Loading Skeleton */}
                  {/* <Skeleton 
                    avatar
                    active
                    className="skeleton"
                    paragraph={{ width : 1200 }}
                  >
                    <p>Halo</p>
                  </Skeleton> */}
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReport;
