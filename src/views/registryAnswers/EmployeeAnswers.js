import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIncident,
  updateAssailant,
  addSurvivor,
  updateRegistry,
} from "../../store";
import { Form } from "antd";
import {
  Button,
  Text,
  Select,
  Input,
  Flex,
  chakra,
  shouldForwardProp,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import AddressModal from "../../components/modals/AddressModal";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import {
  BooleanYesNo,
  BooleanIfYesName,
  DateAndTime,
  Address,
  FullNameAndTitle,
} from "../../components/buttons/RegistryResponseComponents.js";
import BackButton from "../../components/buttons/BackButton";
import RegistryComplete from "../pages/RegistryComplete";
import NextButton from "../../components/buttons/NextButton";
import NameModal from "../../components/modals/NameModal";
import { listVariants, itemVariants } from "../../data/containerVariants";
import SubmissionComplete from "../../components/SubmissionComplete";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function EmployeeAnswers() {
  const { index, registry, registryReport } = useSelector((state) => {
    return {
      index: state.index.index,
      _id: state.index.registry._id,
      registry: state.index.registry,
      registryReport: state.index.registry.registryReport,
    };
  });

  const dispatch = useDispatch();
  const questionIndex = index;
  const TextArea = Input;

  const inputsArray = [
    <Input
      variant="flushed"
      name="fullName"
      placeholder="Full Name"
      width={{ base: "12em", md: "14em", lg: "20em" }}
      onChange={(e) =>
        dispatch(
          updateRegistry({ ...registryReport, [e.target.name]: e.target.value })
        )
      }
    />,
    <Input
      variant="flushed"
      name="title"
      placeholder="Job Title"
      onChange={(e) =>
        dispatch(
          updateRegistry({ ...registryReport, [e.target.name]: e.target.value })
        )
      }
    />,
  ];

  console.log(registry.registryReport);
  console.log(index);

  return (
    <ChakraBox className="">
      <ChakraBox>
        <AnimatePresence mode="wait">
          {questionIndex === 2 ? ( //Can you provide your full name and your job title
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
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

              <FormControl mt={3}>
                <Input
                  variant="flushed"
                  name="title"
                  placeholder="Job Title"
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
            </ChakraBox>
          ) : questionIndex === 3 ? ( //What is the date and approximate time of the incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <DateAndTime />
            </ChakraBox>
          ) : questionIndex === 4 ? ( // Where did the incident take place
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 5 ? ( // Who were the people involved in the incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  List Individuals Directly Involved
                </FormLabel>
                <Input
                  type="text"
                  name="peopleInvolved"
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
                  placeholder="Name1, Name2, etc..."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Can you describe the incident in as much detail as possible
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Form>
                <Form.Item>
                  <FormLabel color="rgb(147,154,236)">Description</FormLabel>
                  <TextArea
                    style={{
                      height: 100,
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
                    placeholder="Descriptions of events"
                  />
                </Form.Item>
              </Form>
            </ChakraBox>
          ) : questionIndex === 7 ? ( // Were there any witnesses to the incident? If yes, who were they
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
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  name="witnesses"
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
                  placeholder="Name1, Name2, etc..."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 8 ? ( // What was the immediate outcome of the incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  Brief description of direct outcome of incident
                </FormLabel>
                <Input
                  style={{
                    height: 100,
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  h={20}
                  width={{ base: "12em", md: "14em", lg: "24em" }}
                  name="incidentOutcome"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="What happened from this incident.."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 9 ? ( // Did the incident affect your ability to perform your job? If so, how
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel color="rgb(147,154,236)">
                  How did the incident effect your work
                </FormLabel>
                <Input
                  style={{
                    height: 100,
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  name="abilitiesAffected"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Brief description.."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Did you seek medical attention as a result of the incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"seekedMedicalAttention"} />
            </ChakraBox>
          ) : questionIndex === 11 ? ( // Have you reported the incident to your direct supervisor or manager
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"reportedToHigherPersonel"} />
            </ChakraBox>
          ) : questionIndex === 12 ? ( // Has any action been taken since the incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"actionsTakenSinceIncident"} />
            </ChakraBox>
          ) : questionIndex === 13 ? ( // How has the incident impacted you personally
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormLabel color="rgb(147,154,236)">
                How did it effect your personal life if any
              </FormLabel>
              <Form>
                <div>
                  <Form.Item>
                    <TextArea
                      style={{
                        height: 100,
                        marginBottom: 24,
                        width: 400,
                      }}
                      type="text"
                      name="personalAffect"
                      onChange={(e) =>
                        dispatch(
                          updateRegistry({
                            ...registryReport,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                      placeholder="Detailed Description"
                    />
                  </Form.Item>
                </div>
              </Form>
            </ChakraBox>
          ) : questionIndex === 14 ? ( // Is there any additional information or comments you would like to add
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Form>
                <div>
                  <Form.Item>
                    <FormLabel color="rgb(147,154,236)">
                      Additional comment's you would like to add
                    </FormLabel>
                    <TextArea
                      style={{
                        height: 100,
                        marginBottom: 24,
                        width: 400,
                      }}
                      type="text"
                      name="additionalComments"
                      onChange={(e) =>
                        dispatch(
                          updateRegistry({
                            ...registryReport,
                            [e.target.name]: e.target.value,
                          })
                        )
                      }
                      placeholder="Anything we've missed that may be relevant.."
                    />
                  </Form.Item>
                </div>
              </Form>
            </ChakraBox>
          ) : questionIndex === 15 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            ></ChakraBox>
          ) : questionIndex === 16 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <SubmissionComplete />
          ) : (
            questionIndex === null()
          )}
        </AnimatePresence>
      </ChakraBox>
    </ChakraBox>
  );
}

export default EmployeeAnswers;
