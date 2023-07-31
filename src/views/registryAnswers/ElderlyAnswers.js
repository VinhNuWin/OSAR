import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../../store";
import { Form, DatePicker } from "antd";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Text,
  chakra,
  shouldForwardProp,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BooleanYesNo,
  DateTime,
  Address,
} from "../../components/buttons/RegistryResponseComponents.js";
import RegistryComplete from "../pages/RegistryComplete";
import { listVariants, itemVariants } from "../../data/containerVariants";
import SubmissionComplete from "../../components/SubmissionComplete";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function ElderlyAnswers() {
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
    <ChakraBox>
      <ChakraBox>
        <AnimatePresence mode="wait">
          {questionIndex === 2 ? ( //Can you please tell me your full name?
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
                    width={{ base: "14em", md: "16em", lg: "20em" }}
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
          ) : questionIndex === 3 ? ( // When did the incident occur?
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
          ) : questionIndex === 4 ? ( // Where did the incident occur?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 5 ? ( // Can you describe what happened in detail?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  Desciption of what happened
                </FormLabel>
                <Input
                  style={{
                    height: 100,
                    width: "100%",
                  }}
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
          ) : questionIndex === 6 ? ( // Who is the person involved in the abusive behavior?
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
                    name="assailantName"
                    placeholder="Persons Full Name"
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
          ) : questionIndex === 7 ? ( // Is this person your caregiver, family member, or someone else? What is their relationship to you?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Form>
                <div className="">
                  <Form.Item>
                    <FormLabel color="rgb(147,154,236)">Relationship</FormLabel>
                    <TextArea
                      style={{
                        height: 100,
                        width: "100%",
                      }}
                      type="text"
                      name="relationToReporter"
                      onChange={(e) =>
                        dispatch(
                          updateRegistry({
                            ...registryReport,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                      placeholder="ie: caregiver, family member, acquaintance.."
                    />
                  </Form.Item>
                </div>
              </Form>
            </ChakraBox>
          ) : questionIndex === 8 ? ( // Were there any specific threats or actions that were particularly concerning?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormLabel color="rgb(147,154,236)">
                Threats or actions made to you
              </FormLabel>
              <FormControl>
                <Input
                  style={{
                    height: 100,
                    width: "100%",
                  }}
                  type="text"
                  name="concerningThreatsOrActions"
                  h={20}
                  width={{ base: "12em", md: "14em", lg: "24em" }}
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Your concerns regarding the person in question"
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 9 ? ( // Have there been other instances of this abuse?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  List any additional incidents
                </FormLabel>
                <Input
                  style={{
                    height: 100,
                    width: "100%",
                  }}
                  type="text"
                  name="additionalIncidentsOfAbuse"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="List additional incidents of abuse.."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Were there any witnesses to the incident or previous incidents
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  List Individuals Who Physically Witnessed Event
                </FormLabel>
                <Input
                  style={{
                    height: 100,
                    width: "100%",
                  }}
                  type="text"
                  name="witnesses"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Name1, name2, name3.."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 11 ? ( // Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"evidence"} />
            </ChakraBox>
          ) : questionIndex === 12 ? ( // Are there any other people living with you or who could be at risk because of this person?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"otherPeopleAtRisk"} />
            </ChakraBox>
          ) : questionIndex === 13 ? ( // Do you feel safe in your current living situation?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"currentLivingSituationSafe"} />
            </ChakraBox>
          ) : questionIndex === 14 ? ( //Submit
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Text></Text>
            </ChakraBox>
          ) : questionIndex === 15 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <SubmissionComplete />
          ) : (
            questionIndex === null(<RegistryComplete />)
          )}
        </AnimatePresence>
      </ChakraBox>
    </ChakraBox>
  );
}

export default ElderlyAnswers;
