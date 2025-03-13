import React from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Todo = ({ text, updateMode, deleteMode }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-md w-full max-w-lg">
      <span className="text-lg font-medium font-mono text-gray-700">{text}</span>
      <div className="flex items-center gap-3">
        <BsPencilSquare 
          onClick={updateMode} 
          className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl"
        />
        <MdDelete 
          onClick={deleteMode} 
          className="text-gray-600 hover:text-red-600 cursor-pointer text-xl"
        />
      </div>
    </div>
  );
};

export default Todo;
