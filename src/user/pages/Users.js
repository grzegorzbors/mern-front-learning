import React from "react";
import UsersList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "Greg",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?cs=srgb&dl=pexels-burst-374870.jpg&fm=jpg",
    places: 3,
  },
];

const Users = () => {
  return <UsersList items={USERS} />;
};

export default Users;
