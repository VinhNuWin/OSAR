import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../../store";
import { Form } from "antd";
import {
  Input,
  FormControl,
  FormLabel,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import {
  BooleanYesNo,
  DateAndTime,
  Address,
} from "../../components/buttons/RegistryResponseComponents.js";
import RegistryComplete from "../pages/RegistryComplete";
import { listVariants, itemVariants } from "../../data/containerVariants";
import SubmissionComplete from "../../components/SubmissionComplete";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function SpouseAnswers() {
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

  console.log(index);

  return (
    <ChakraBox>
      <ChakraBox>
        <AnimatePresence mode="wait">
          {questionIndex === 2 ? ( //Are you in immediate danger or in need of medical attention?
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
          ) : questionIndex === 3 ? ( //'Who is the person responsible for the abuse?'
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
                    name="assailantsFullName"
                    placeholder="Name of the abuser"
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
          ) : questionIndex === 4 ? ( // When did the incident happen?'
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <DateAndTime />
            </ChakraBox>
          ) : questionIndex === 5 ? ( // Where did the incident occur?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Can you provide a detailed account of the incident(s)? What happened?
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
                  placeholder="Breif description of events"
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 7 ? ( // Were there any specific threats made? If yes, what were they?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormLabel color="rgb(147,154,236)">
                List threats, if any..
              </FormLabel>
              <FormControl>
                <Input
                  style={{
                    height: 100,
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  name="threatsOrActions"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Threat1, Threat2, etc..."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 8 ? ( // Are there any witnesses who can corroborate the incident?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Form>
                <div>
                  <FormLabel color="rgb(147,154,236)">
                    List Individuals Who Physically Witnessed Event
                  </FormLabel>
                  <Form.Item>
                    <TextArea
                      style={{
                        height: 100,
                        marginBottom: 24,
                        width: 400,
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
                      placeholder="ie: caregiver, family member, acquaintance.."
                    />
                  </Form.Item>
                </div>
              </Form>
            </ChakraBox>
          ) : questionIndex === 9 ? ( // Has this occured before? If so, have you reported it in the past?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name={"firstReport"} />
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Do you have any physical, digital, or other types of evidence of the abuse (like photographs, emails, text messages, etc.)?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormLabel color="rgb(147,154,236)">
                List any pieces of evidence you may have
              </FormLabel>
              <FormControl>
                <Input
                  style={{
                    height: 100,
                    marginBottom: 24,
                    width: 400,
                  }}
                  type="text"
                  name="evidence"
                  onChange={(e) =>
                    dispatch(
                      updateRegistry({
                        ...registryReport,
                        [e.target.name]: e.target.value,
                      })
                    )
                  }
                  placeholder="Pictures of bruises, text messages, screenshots etc.."
                />
              </FormControl>
            </ChakraBox>
          ) : questionIndex === 11 ? ( // Submit Registry
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div></div>
            </ChakraBox>
          ) : questionIndex === 12 ? ( // Submit Registry
            <SubmissionComplete />
          ) : (
            questionIndex === null(<RegistryComplete />)
          )}
        </AnimatePresence>
      </ChakraBox>
    </ChakraBox>
  );
}

export default SpouseAnswers;
