import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeIndex, addResponseSummary, addSummaryKeys } from "../../store";

export default function PostSubmit(props) {
  const dispatch = useDispatch();
  const { index, registryType, registryReport } = useSelector((state) => {
    return {
      index: state.index.index,
      registryType: state.index.registry.registryType,
      registryReport: state.index.registry.registryReport,
    };
  });

  const handlePostSubmit = async () => {
    const registryResponse = await axios.post(
      `https://osar-api.onrender.com/${registryType}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        registryType: registryType,
        registryReport: registryReport,
      }
    );
    console.log(registryResponse.data.data);
    console.log("Post Submitted");

    dispatch(changeIndex(parseInt(index + 1)));
  };

  return (
    <div className="backBtn">
      <Button className="btn3" onClick={handlePostSubmit}>
        Next
      </Button>
    </div>
  );
}

//https://osar-api.onrender.com/${registryType}
