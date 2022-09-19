import React from "react";
import { useNavigate } from "react-router-dom";
import("./AddItemBtn.css");

export const AddItemBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="addBtn___container"
      onClick={() => {
        navigate("/addItem");
      }}
    >
      +
    </div>
  );
};
