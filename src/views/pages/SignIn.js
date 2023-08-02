import React from "react";
import "../../styles.css";
import "../../index.css";
import { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, addEmail, add_Id, setAnonymous } from "../../store";
import axios from "axios";
import {
  Flex,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  chakra,
  shouldForwardProp,
  InputLeftElement,
  InputGroup,
  Checkbox,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Loader from "../../components/Loader";
import ThingsToConsider from "../../data/ThingsToConsider";
import cover from "../../images/cover.png";
import MissionStatement from "../../components/modals/MissionStatement";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function SignIn() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [anon, setAnon] = useState(false);

  const { index, email, fullName } = useSelector((state) => {
    return {
      index: state.index.index,
      email: state.index.registry.email,
      fullName: state.index.registry.registryReport.fullName,
    };
  });

  // const handleAnon = (e) => {
  //   setAnon(e.target.checked);

  //   if (anon
  //     ? dispatch(setAnonymous("anonymous"))
  //   : dispatch(setAnonymous("")))
  // }

  const isError = email === "";

  const addUser = async () => {
    console.log("adduser clicked");
    setLoader(true);
    try {
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

      const userId = response.data.data._id;
      dispatch(add_Id(userId));
      dispatch(changeIndex(parseInt(index + 1)));
    } catch {
      setLoader(false);
    }
  };

  console.log(anon);

  return (
    <motion.div>
      <Flex>
        <Flex className="panel-one">
          <Stack className="signin-wrapper">
            <center>
              <div className="header-wrapper">
                <MissionStatement />
              </div>
              <Flex className="header" />
              <Flex className="signin-h2 ">
                <Text textAlign="center" w="full">
                  Follow the promps to submit your report.
                </Text>
              </Flex>
              <h3 className="signin-body">
                The report takes approx. 2-3 minutes.
              </h3>
              <Flex className="">
                <h2 className="signin-h1" w="full">
                  Enter Your Email
                </h2>
              </Flex>
              <Flex className="sign-in-element-email">
                <FormControl isInvalid={isError}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon color="black" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      variant="flushed"
                      value={email}
                      onChange={(e) => {
                        dispatch(addEmail(e.target.value));
                      }}
                    />

                    {!isError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </InputGroup>
                  <Checkbox
                    m={2}
                    color="rgb(147,154,236)"
                    isChecked={anon}
                    onChange={(e) => setAnon(e.target.checked)}
                  >
                    I would like to submit this report anonymously
                  </Checkbox>
                </FormControl>
                <ThingsToConsider />
              </Flex>
              <div className="loader">
                {loader ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Flex className="signin-start-registry" direction="column">
                <Button className="btn" type="submit" onClick={addUser} w="50%">
                  <div>
                    {loader ? (
                      <div>Generating Registry...</div>
                    ) : (
                      "Start Registry"
                    )}
                  </div>
                </Button>
                <Text className="signin-body" marginBottom={8}>
                  If you have questions or feedback please email us at
                  info@documentedvoices.org
                </Text>
              </Flex>
            </center>
          </Stack>
        </Flex>
        <Flex className="panel-two">
          <img src={cover} />
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default SignIn;
