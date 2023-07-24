import React from "react";
import "../../../styles.css";
import "../../../index.css";
import { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIndex,
  addEmail,
  add_Id,
  addRegistryId,
  registrySelect,
} from "../../../store";
import axios from "axios";
import {
  Flex,
  Button,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Spinner,
  Checkbox,
  Text,
  chakra,
  shouldForwardProp,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Loader from "../../../components/Loader";
import ThingsToConsider from "../../../data/ThingsToConsider";
import logo from "../../../images/logo.png";
import MissionStatement from "../../../components/modals/MissionStatement";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function SignIn() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const { index, email, registryId } = useSelector((state) => {
    return {
      index: state.index.index,
      email: state.index.registry.email,
      registryId: state.index.registry.registryId,
    };
  });

  const addUser = async () => {
    console.log("adduser clicked");
    setLoader(true);
    const response = await axios.post(
      "https://osar-api.onrender.com/registry",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "POST",
        },
        email: email,
      }
    );
    console.log(response);
    const userId = response.data.data._id;
    console.log(userId);

    dispatch(add_Id(userId));
    dispatch(changeIndex(parseInt(index + 1)));
    console.log(registryId);
  };

  console.log(email);

  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <Flex className="signin-wrapper">
      <Flex>
        <Stack className="signin-wrapper">
          <center>
            <MissionStatement />
            <Flex className="header "></Flex>
            <Flex>
              <p className="signin-p">
                Follow the promps to submit your report.
              </p>
            </Flex>

            <Flex>
              <h3 className="signin-body">
                The report takes approx. 2-3 minutes.
              </h3>
            </Flex>

            <Flex className="">
              <h2 className="signin-h1" w="full">
                Enter Your Email
              </h2>
            </Flex>

            <Flex className="sign-in-element-email">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="black" />
                  </InputLeftElement>
                  <Input
                    variant="flushed"
                    value={email}
                    onChange={(e) => {
                      dispatch(addEmail(e.target.value));
                    }}
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  />
                </InputGroup>
                <Checkbox m={2} color="rgb(147,154,236)">
                  I would like to submit this report anonymously
                </Checkbox>
              </FormControl>
              <ThingsToConsider />
              <div className="mt-10">{loader ? <Loader /> : ""}</div>
            </Flex>
            <Flex className="signin-start-registry" direction="column">
              <Button className="btn mb-10" onClick={addUser} w="90%">
                Start Registry
              </Button>
              <Text marginBottom={0}>
                If you have questions or feedback email us at
                info@documentedvoices.com
              </Text>
            </Flex>
          </center>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default SignIn;
