import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../../store";
import { Form } from "antd";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Text,
  shouldForwardProp,
  chakra,
} from "@chakra-ui/react";
import {
  BooleanYesNo,
  DateTime,
  Address,
} from "../../components/buttons/RegistryResponseComponents.js";
import RegistryComplete from "../pages/RegistryComplete";
import { listVariants, itemVariants } from "../../data/containerVariants";
import SubmissionComplete from "../../components/SubmissionComplete";
import { useMediaQuery } from "@chakra-ui/react";
import { DatePicker } from "antd";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function ChildrensAnswers() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  const { index, registry, registryReport } = useSelector((state) => {
    return {
      index: state.index.index,
      registry: state.index.registry,
      registryReport: state.index.registry.registryReport,
    };
  });

  const dispatch = useDispatch();
  const questionIndex = index;
  const TextArea = Input;

  console.log(registry.registryReport);
  console.log(index);

  return (
    <AnimatePresence mode="wait">
      <ChakraBox initial="hidden" animate="visible" variants={listVariants}>
        <ChakraBox variants={itemVariants}>
          {questionIndex === 2 ? ( //Whats your name ?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>
                <FormControl>
                  <Input
                    variant="flushed"
                    name="fullName"
                    placeholder="Full Name"
                    width={{ base: "12em", md: "14em", lg: "20em" }}
                    onChange={(e) =>
                      dispatch(
                        updateRegistry({
                          ...registryReport,
                          [e.target.name]: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
              </div>
            </ChakraBox>
          ) : questionIndex === 3 ? ( //What happened ?
            <ChakraBox variants={itemVariants} key={index}>
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  Desciption of what happened
                </FormLabel>
                <Input
                  style={{
                    height: 120,
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  name="detailsOfIncident"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="No one will know unless you decide"
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 4 ? ( //'Where did this happen?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 5 ? ( //When did this happen?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>
                {isSmallDevice ? (
                  <DatePicker
                    onChange={(value) => {
                      console.log(value);
                      dispatch(updateRegistry({ date: value.$d }));
                    }}
                  />
                ) : (
                  <DateTime />
                )}
              </div>
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Whats the name of the person we're talking about?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>
                <FormControl>
                  <Input
                    variant="flushed"
                    name="assailantName"
                    placeholder="Persons Name"
                    width={{ base: "12em", md: "14em", lg: "20em" }}
                    onChange={(e) =>
                      dispatch(
                        updateRegistry({
                          ...registryReport,
                          [e.target.name]: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
              </div>
            </ChakraBox>
          ) : questionIndex === 7 ? ( // Do you have any visible bruises and/or marks?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"evidence"} />
            </ChakraBox>
          ) : questionIndex === 8 ? ( // Who is someone you feel safe with
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>
                <FormControl>
                  <Input
                    variant="flushed"
                    name="safePerson"
                    placeholder="Persons Name"
                    width={{ base: "12em", md: "14em", lg: "20em" }}
                    onChange={(e) =>
                      dispatch(
                        updateRegistry({
                          ...registryReport,
                          [e.target.name]: e.target.value,
                        })
                      )
                    }
                  />
                </FormControl>
              </div>
            </ChakraBox>
          ) : questionIndex === 9 ? ( // SUbmit Registry
            <ChakraBox variants={itemVariants} key={index}>
              <Text></Text>
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Complete
            <SubmissionComplete />
          ) : (
            questionIndex === null(<RegistryComplete />)
          )}
        </ChakraBox>
      </ChakraBox>
    </AnimatePresence>
  );
}

export default ChildrensAnswers;
