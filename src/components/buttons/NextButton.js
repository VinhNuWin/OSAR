import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../../store";

export default function NextButton() {
  const dispatch = useDispatch();
  const { index } = useSelector((state) => {
    return {
      index: state.index.index,
    };
  });
  const newIndex = index + 1;

  const handleRegistryInputs = async () => {
    dispatch(changeIndex(parseInt(newIndex)));
    console.log("index was changed");
  };

  return (
    <div className="backBtn">
      <Button className="btn3" onClick={handleRegistryInputs}>
        Next
      </Button>
    </div>
  );
}
