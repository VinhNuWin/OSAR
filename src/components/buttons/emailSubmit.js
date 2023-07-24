import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeIndex } from "../../store";
import React from "react";

export default function EmailSubmit() {
  const dispatch = useDispatch();
  const { index, _id, registryType, email, registryReport, reportSummary } =
    useSelector((state) => {
      return {
        index: state.index.index,
        _id: state.index.registry._id,
        registry: state.index.registry,
        email: state.index.registry.email,
        registryType: state.index.registry.registryType,
        registryReport: state.index.registry.registryReport,
        reportSummary: state.index.registry.reportSummary,
      };
    });

  const handleEmailSubmit = async () => {
    console.log("email sent");
    const response = await axios.post(
      `https://dvaa-smtp.onrender.com/${registryType}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        registryReport: registryReport,
        email: email,
      }
    );
    console.log("Report has been submitted");

    dispatch(changeIndex(parseInt(index + 1)));
  };

  const handleOnSubmit = async () => {
    console.log("email sent");
    dispatch(changeIndex(parseInt(index + 1)));
  };

  return (
    <div className="backBtn">
      <Button color="blue" className="btn3" onClick={handleEmailSubmit}>
        Submit
      </Button>
    </div>
  );
}

// `http://localhost:3002/${registryType}`
// `https://dvaa-smtp.onrender.com/${registryType}`
