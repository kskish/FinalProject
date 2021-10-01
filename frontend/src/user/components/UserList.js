import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

//If no user is found => return msg
const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  //if user > 0 return list of users
  return (
    <>
      {props.users.map((user) => {
        {
          /* Each user will have own Component */
        }
        return (
          <UserItem
            key={user._id}
            id={user._id}
            businessName={user.businessName}
          />
        );
      })}
    </>
  );
};

export default UserList;
