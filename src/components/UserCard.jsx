import React from "react";

function UserCard({user}) {

  return (
    <div className="user-card">
      <div className="user-card-img">
        <img
          src="https://www.svgrepo.com/show/209349/user-avatar.svg"
          alt="user card image"
          width={"40px"}
          height={"auto"}
        />
      </div>
      <div className="user-card-info">
        <h3>{user.name}</h3>
        <p>{user.username}</p>
      </div>
    </div>
  );
}

export default UserCard;
