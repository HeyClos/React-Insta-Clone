import React from "react";
import PostContainer from "./PostContainer";
import PostHeader from "./PostHeader"

const ProfileList = props => {
  console.log(props);
  return (
    <div>
      <PostHeader />
      {props.profiles.map((profile, index) => (
        <PostContainer key={index}
        comments={profile.comments}
        imageUrl={profile.imageUrl}
        likes={profile.likes} 
        thumbnailUrl={profile.thumbnailUrl}
        timestamp={profile.timestamp}
        username={profile.username}/>
      ))}
    </div>
  );
};

export default ProfileList;