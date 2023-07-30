import React from "react";
import "../../styles.css";
import { useState } from "react";
import {
  motion,
  isValidMotionProp,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../../store";
import axios from "axios";
import { Flex, Button, Heading } from "@chakra-ui/react";
import general from "../../images/general.png";
import { RegistrySelectButton } from "../../components/buttons/RegistrySelectButton";

export default function SelectYourRegistry() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const { index, _id, registryType, registryId } = useSelector((state) => {
    return {
      index: state.index.index,
      _id: state.index.registry._id,
      registryId: state.index.registry.registryId,
      registryType: state.index.registry.registryType,
    };
  });

  const newIndex = index + 1;
  const isError = registryType === "";

  // const handleRegistryInputs = async () => {
  //   console.log("patch request made");
  //   setLoader(true);
  //   const response = await axios.patch(
  //     `https://osar-api.onrender.com/registry/${_id}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Method": "GET,PATCH,POST,DELETE",
  //       },
  //       registryId: registryId,
  //       registryType: registryType,
  //       _id: _id,
  //     }
  //   );
  //   dispatch(changeIndex(parseInt(newIndex)));
  //   console.log(response);
  // };

  return (
    <Flex className="dual-panel-wrapper">
      <Flex className="panel-one" direction="column">
        <Flex className="header" />
        <Heading className="selectRegistry-header" color="black" marginTop={10}>
          Select a Registry
        </Heading>
        <div>
          <Flex direction="column" className="selectRegistry-buttons-wrapper">
            <RegistrySelectButton />
            <Flex className="answer-element-continue">
              {/* <Button className="btn" onClick={handleRegistryInputs}>
                <div>
                  {loader ? <div>Generating</div> : <div>Continue</div>}
                </div>
              </Button> */}
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Flex className="panel-two">
        <img src={general} />
      </Flex>
    </Flex>
  );
}
