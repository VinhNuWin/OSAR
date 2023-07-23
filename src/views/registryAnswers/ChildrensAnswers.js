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
  DateAndTime,
  Address,
} from "../../components/buttons/RegistryResponseComponents.js";
import RegistryComplete from "../pages/RegistryComplete";
import { listVariants, itemVariants } from "../../data/containerVariants";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function ChildrensAnswers() {
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
    <AnimatePresence>
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
          ) : questionIndex === 3 ? ( //Are you in immediate danger ?
            <ChakraBox variants={itemVariants} key={index}>
              <div>
                <BooleanYesNo name="immediateDangerOrMedicalAttention" />
              </div>
            </ChakraBox>
          ) : questionIndex === 4 ? ( //'How old are you?
            <ChakraBox variants={itemVariants} key={index}>
              <div>
                <FormControl>
                  <Input
                    variant="flushed"
                    name="age"
                    placeholder="age"
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
          ) : questionIndex === 5 ? ( //Can you tell us what happened?
            <ChakraBox variants={itemVariants} key={index}>
              <FormControl>
                <FormLabel>Desciption of what happened</FormLabel>
                <Input
                  type="text"
                  name="detailsOfIncident"
                  h={20}
                  width={{ base: "12em", md: "14em", lg: "20em" }}
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Brief description"
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Where?
            <ChakraBox variants={itemVariants} key={index}>
              <Address />
            </ChakraBox>
          ) : questionIndex === 7 ? ( // When did it happen?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <DateAndTime />
            </ChakraBox>
          ) : questionIndex === 8 ? ( // Who is the person responsible for the abuse ?
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
                    placeholder="Assailants Full Name"
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
          ) : questionIndex === 9 ? ( // Do you have any visible bruises and/or marks
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"evidence"} />
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Are there any weapons in the house?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"useOfWeapons"} />
            </ChakraBox>
          ) : questionIndex === 11 ? ( // Who is someone you feel safe with?
            <ChakraBox variants={itemVariants} key={index}>
              <Input name={"safePerson"} />
            </ChakraBox>
          ) : questionIndex === 12 ? ( // SUbmit Registry
            <ChakraBox variants={itemVariants} key={index}>
              <Text>Submit</Text>
            </ChakraBox>
          ) : questionIndex === 13 ? ( // Complete
            <ChakraBox variants={itemVariants} key={index}>
              <Text></Text>
            </ChakraBox>
          ) : (
            questionIndex === null(<RegistryComplete />)
          )}
        </ChakraBox>
      </ChakraBox>
    </AnimatePresence>
  );
}

export default ChildrensAnswers;
