import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

function UserList() {
  const { error, loading, users } = useTypedSelector((state) => state.user);

  return <div></div>;
}

export default UserList;
