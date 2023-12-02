import React from "react";
import { useState } from "react";
import { client } from "../configs/client";
import { useSelector, useDispatch } from "react-redux";
const BtnAddColumn = () => {
  const dispatch = useDispatch();
  const [columns, setColumns] = useState([]);

  const createColumn = async () => {
    const columnTodoAdd = {
      id: generateId(),
      title: `${columns.length + 1}`,
    };
    client.setToken();
    const { response, data } = client.post();
    setColumns([...columns, columnTodoAdd]);
  };
  const generateId = () => {
    return Math.floor(Math.random() * 10001);
  };

  return (
    <button
      className="
h-[60px]
w-[350px]
min-w-[350px]
cursor-pointer
rounded-lg
bg-mainBackgroundColor
border-2
border-columnBackgroundColor
p-4
ring-teal-600
hover:ring-2
flex
gap-2
"
      onClick={createColumn}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Add Column
    </button>
  );
};

export default BtnAddColumn;
