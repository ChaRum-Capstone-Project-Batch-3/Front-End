import React from "react";
import { Card, Skeleton } from "antd";
import { UserThread } from './userPost/UserPost'
import { UserDetails } from "./userDetails/UserDetails";


const CardPost = ({ props }) => {

  const data = JSON.parse(props);

  return (
    <>  
        {
            data === '' ? 
            <Card>
            <Skeleton 
                avatar
                active
                className="skeleton"
                paragraph={{ width : 1200 }}
            >
            </Skeleton>
            </Card> 
            : ''
        }
        {
            data.followers? (
                <UserDetails data={ data }/>
            )
            : (
                <UserThread data={ data }/>
            )
        }
    </>
  );
};

export default CardPost;
