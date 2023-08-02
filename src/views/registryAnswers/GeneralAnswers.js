import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../../store";
import { Form, DatePicker, TimePicker } from "antd";
import {
  Input,
  FormControl,
  FormLabel,
  chakra,
  shouldForwardProp,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Address,
  FormInput,
  DateTime,
  FullName,
} from "../../components/buttons/RegistryResponseComponents.js";
import { itemVariants } from "../../data/containerVariants";
import SubmissionComplete from "../../components/SubmissionComplete";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function GeneralAnswers() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  const { index, registryReport } = useSelector((state) => {
    return {
      index: state.index.index,
      registryReport: state.index.registry.registryReport,
    };
  });

  const dispatch = useDispatch();
  const questionIndex = index;
  const TextArea = Input;

  console.log(registryReport);
  console.log(index);

  return (
    <ChakraBox className="">
      <ChakraBox>
        <AnimatePresence mode="wait">
          {questionIndex === 2 ? ( //Full Name
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>
                <FullName />
                {/* <FormControl>
                  <Input
                    variant="flushed"
                    name="fullName"
                    placeholder="Full Name"
                    fontSize="20px"
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
                </FormControl> */}
              </div>
            </ChakraBox>
          ) : questionIndex === 3 ? ( // When did the incident happen?
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
          ) : questionIndex === 4 ? ( //Where did the incident occur?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 5 ? ( // Can you provide a detailed account of the incident(s)? What happened?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormInput name="detailsOfIncident" />
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Name of person responsible for incident?
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
                  type="text"
                  name="peopleInvolved"
                  h={20}
                  width={{ base: "20em", md: "20em", lg: "24em" }}
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
          ) : questionIndex === 7 ? ( // Are there any witnesses who saw the incident
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
                  type="text"
                  name="witnesses"
                  h={20}
                  width={{ base: "20em", md: "20em", lg: "26em" }}
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
          ) : questionIndex === 8 ? ( // Is there any additional information or comments you would like to add?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormLabel color="rgb(147,154,236)" className="mt-5">
                Additional comments you feel are important to your story
              </FormLabel>
              <Form>
                <div>
                  <Form.Item>
                    <TextArea
                      style={{
                        height: 100,
                        width: "100%",
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
                      placeholder="Specific circumstances, environment, misrepresentations, etc..."
                    />
                  </Form.Item>
                </div>
              </Form>
            </ChakraBox>
          ) : questionIndex === 9 ? ( //a timestamped copy will be sent to the the email provided'
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            ></ChakraBox>
          ) : questionIndex === 10 ? (
            <div>
              <SubmissionComplete />
            </div>
          ) : null}
        </AnimatePresence>
      </ChakraBox>
    </ChakraBox>
  );
}

export default GeneralAnswers;
