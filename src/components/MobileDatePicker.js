import React from "react";
import DatePicker from "react-mobile-datepicker";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../store";
import { useState } from "react";

export const MobileDatePicker = () => {
  const dispatch = useDispatch;
  const { registryReport } = useSelector((state) => {
    return {
      registryReport: state.index.registry.registryReport,
    };
  });

  const [isOpen, setIsOpen] = useState(false);

  const monthMap = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const handleClick = () => {
    this.setState({ isOpen: true });
  };

  const handleCancel = () => {
    this.setState({ isOpen: !isOpen });
  };

  const handleSelect = (time) => {
    this.setState({ isOpen: false });
  };

  const handleChange = (e) => {
    dispatch(
      updateRegistry({
        ...registryReport,
        [e.target.name]: e.target.value,
      })
    );
  };

  console.log();
  console.log();

  return (
    <div className="">
      <Button className="btn" onClick={handleClick}>
        select time
      </Button>

      <DatePicker
        showFooter="true"
        cancelText="Skip"
        confirmText="Ok"
        name="date"
        theme="android"
        value=""
        isOpen={isOpen}
        //   dateConfig={this.monthMap}
        onSelect={handleSelect}
        onCancel={handleCancel}
        onChange={handleChange}
      />
    </div>
  );
};

export default MobileDatePicker;
