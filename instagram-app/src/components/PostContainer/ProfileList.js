import React from "react";
import PostContainer from "./PostContainer";
import PostHeader from "./PostHeader"

const ProfileList = props => {
  console.log(props);
  return (
    <div>
      <PostHeader />
      {props.profiles.map((profile, index) => (
        <PostContainer index={index}
        comments={profile.comments}
        imageUrl={profile.imageUrl}
        likes={profile.likes} 
        thumbnailUrl={profile.thumbnailUrl}
        timestamp={profile.timestamp}
        username={profile.username}
        addComment={props.addComment}/>
      ))}
    </div>
  );
};

export default ProfileList;