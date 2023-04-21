import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  //delagating the rendering of userList to UserList components
  //https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_960_720.jpg
  const USERS = [
    {
      id: "u1",
      name: "ambika",
      image:
        "https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_960_720.jpg",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
