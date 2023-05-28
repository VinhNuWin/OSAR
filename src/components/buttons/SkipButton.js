import {Button} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { backIndex, changeIndex } from "../../store";


export default function BackButton() {
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    })
    const dispatch = useDispatch();
    const newIndex = parseInt(index + 1);

    const skipIndex = (e) => {
        dispatch(changeIndex(parseInt(index + 1)));
    }

    return (
        <Button 
        skip
        onClick={skipIndex}
        />
    )
}