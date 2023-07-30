import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../store";
import { useState } from "react";
import DatePicker from "antd";

export const MobileDatePicker = (date, string) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <DatePicker
        onChange={(date) => {
          dispatch(updateRegistry({ date: date.$d }));
        }}
      />
    </div>
  );
};

export default MobileDatePicker;
