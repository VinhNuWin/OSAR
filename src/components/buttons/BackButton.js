import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { backIndex, changeIndex } from "../../store";

export default function BackButton() {
  const { index } = useSelector((state) => {
    return {
      index: state.index.index,
    };
  });
  const dispatch = useDispatch();
  const previousIndex = parseInt(index - 1);

  const decrementIndex = (e) => {
    dispatch(backIndex(previousIndex));

    if (index <= 0) {
      return dispatch(changeIndex(parseInt(0)));
    }
  };

  return (
    <div className="backBtn">
      <Button
        className="btn3"
        // variant='nextButton'
        onClick={decrementIndex}
      >
        Back
      </Button>
    </div>
  );
}
