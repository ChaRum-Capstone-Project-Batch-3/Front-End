import React, { useState } from "react";
import { Avatar, Button, Card, Image, Skeleton } from "antd";
import like from '../assets/like-tag.svg'
import massage from '../assets/messages.svg'
import share from '../assets/share.svg'
import receipt from '../assets/receipt-square.svg'
import ThreadTable from "../../table/ThreadTable";
import { DeleteOutlined, StopOutlined } from "@ant-design/icons";
import Filter from "../../filtertopic/Filter";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllThread } from "../../../store/thread/ThreadSlicer";

const ReadMore = ({children}) =>{
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{ 'color' : '#989797' }}>
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>
  );
}

export const UserDetails = ({data}) => {

    // state
    const [filterTopic, setFilterTopic] = useState(true);
    const [filterReported, setFilterReported] = useState(true);

    console.log(data)
    
    // props data
    const { key, name, followers, age } = data
    
    console.log(followers)

    return (
        <>
        <div className="main-card-user">
            <Card
                className="card-user"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
                bodyStyle={{ 'width' : '80vw'}}
            >
                <div className="card-header">
                    <Avatar
                        size={{ md: 38, lg: 40, xl: 60, xxl: 60 }}
                        src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                    />
                    <div className="header-title">
                        <h3> {name} </h3>
                        <p> {followers} Followers | {followers} Following</p>
                    </div>
                    <div className="button">
                        <Button className="button-delete" size="large">
                            <DeleteOutlined/>  Delete User
                        </Button>
                        <Button className="button-suspend" size="large">
                            <StopOutlined/> Suspend
                        </Button>
                    </div>
                </div>
                <Card
                    className="interaction-footer-user"
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
                    bodyStyle={{
                    'padding' : '0px',
                    'gap' : '45px',
                    'display' : 'flex',
                    'justifyContent' : 'center'
                    }}
                >
                    <Card
                        className="card total-likes-user"
                        bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                    >
                        <h2>Likes</h2>
                        <div className="like">
                        <img
                            src={like}
                            alt='total'
                        />
                        <h1> 2.477 </h1>
                        </div>
                    </Card>
                    <Card
                        className="card total-comments-user"
                        bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                    >
                        <h2>Comment</h2>
                        <div className="comment">
                        <img
                            src={massage}
                            alt='reached'
                        />
                        <h1> 2.477</h1>
                        </div>
                    </Card>
                    <Card
                        className="card total-likes-user shares"
                        bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                    >
                        <h2>Shares</h2>
                        <div className="like">
                        <img
                            src={share}
                            alt='total'
                        />
                        <h1> 2.477 </h1>
                        </div>
                    </Card>
                    <Card
                        className="card total-comments-user bookmark"
                        bodyStyle={{ 'display' : 'grid', 'padding' : '0px', 'paddingTop' : '10px'}}
                    >
                        <h2>Bookmark</h2>
                        <div className="comment">
                        <img
                            src={receipt}
                            alt='reached'
                        />
                        <h1> 2.477</h1>
                        </div>
                    </Card>
                </Card>
            </Card>
        </div>
        <div className="filter">
            <Filter topic={filterTopic} />
            <Filter report={filterReported} />
        </div>
        <div className="main-card-user">
        <Card
            className="card-user"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 70 }}
            bodyStyle={{ 'width' : '80vw'}}
        >
            <ThreadTable
                response={followers}
            />
        </Card>
        </div>
    </>
  )
}
