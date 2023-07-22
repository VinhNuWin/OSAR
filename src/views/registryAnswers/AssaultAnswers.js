import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistry } from "../../store";
import {
  Input,
  chakra,
  shouldForwardProp,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Text,
  Card,
  CardHeader,
  Select,
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

function AssaultAnswers() {
  const { index, registryReport } = useSelector((state) => {
    return {
      index: state.index.index,
      registryReport: state.index.registry.registryReport,
    };
  });

  const dispatch = useDispatch();
  const questionIndex = index;

  console.log(index);

  return (
    <ChakraBox>
      <ChakraBox>
        <AnimatePresence mode="wait">
          {questionIndex === 2 ? ( //Can you please provide your full name?
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
            </ChakraBox>
          ) : questionIndex === 3 ? ( //'When did the incident occur?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <motion.div>
                <DateAndTime />
              </motion.div>
            </ChakraBox>
          ) : questionIndex === 4 ? ( // Do you remember where the incident occurred
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Address />
            </ChakraBox>
          ) : questionIndex === 5 ? ( // Was Alcohol Involved
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="alcoholInvolved" />
            </ChakraBox>
          ) : questionIndex === 6 ? ( // Were Drugs Involved
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="drugsInvolved" />
            </ChakraBox>
          ) : questionIndex === 7 ? ( // Was Survivor Asleep at time of Incident
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="wasSurvivorAsleep" />
            </ChakraBox>
          ) : questionIndex === 8 ? ( // Were there verbal threats to the survivor
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="verbalThreats" />
            </ChakraBox>
          ) : questionIndex === 9 ? ( // Was resistance offered by survivor
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="resistanceOffered" />
            </ChakraBox>
          ) : questionIndex === 10 ? ( // Details of the assault
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel>Details of the assault</FormLabel>
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
          ) : questionIndex === 11 ? ( // Areas assaulted
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <FormControl>
                <FormLabel>Details of the assault</FormLabel>
                <Input
                  type="text"
                  name="areasAssaulted"
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
          ) : questionIndex === 12 ? ( // Do you have any evidence of the abuse (like photographs of injuries, written communication, etc)?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="evidence" />
            </ChakraBox>
          ) : questionIndex === 13 ? ( // Use of weapons
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="useOfWeapons" />
            </ChakraBox>
          ) : questionIndex === 14 ? ( // Use of Restraints
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <BooleanYesNo name="useOfRestraints" />
            </ChakraBox>
          ) : questionIndex === 15 ? ( // Assailants Gender
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      assailantGender: "male",
                    })
                  )
                }
              >
                Male
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      assailantGender: "female",
                    })
                  )
                }
              >
                Female
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      assailantGender: "non-binary",
                    })
                  )
                }
              >
                Non-Binary
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      assailantGender: "unknown",
                    })
                  )
                }
              >
                Unknown
              </Button>
            </ChakraBox>
          ) : questionIndex === 16 ? ( // Assailants Race/Ethnicity
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Card>
                <CardHeader size="sm">
                  <Select
                    placeholder="Ethnicity"
                    name="raceEthnicity"
                    onChange={(e) =>
                      dispatch(
                        updateRegistry({
                          ...registryReport,
                          raceEthnicity: e.target.value,
                        })
                      )
                    }
                  >
                    <option value="white">White</option>
                    <option value="black/african">
                      Black or African American
                    </option>
                    <option value="americanIndian/alaskanNative">
                      American Indian or Alaskan Native
                    </option>
                    <option value="hawaiian/pacificIslander">
                      Native Hawaiian or Pacific Islander
                    </option>
                    <option value="asian">Asian</option>
                    <option value="hispanic/latino">Hispanic or Latino</option>
                  </Select>
                </CardHeader>
              </Card>
            </ChakraBox>
          ) : questionIndex === 17 ? ( // Do you know the assailants name?
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
                  name="assailantsFullName"
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
            </ChakraBox>
          ) : questionIndex === 18 ? ( //Survivor Gender
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      survivorGender: "male",
                    })
                  )
                }
              >
                Male
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      survivorGender: "female",
                    })
                  )
                }
              >
                Female
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      survivorGender: "non-binary",
                    })
                  )
                }
              >
                Non-Binary
              </Button>
              <Button
                variant="selectButton"
                onChange={() =>
                  dispatch(
                    updateRegistry({
                      ...registryReport,
                      survivorGender: "unknown",
                    })
                  )
                }
              >
                Unknown
              </Button>
            </ChakraBox>
          ) : questionIndex === 19 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>Additonal feedback</div>
            </ChakraBox>
          ) : questionIndex === 20 ? ( // Would you like information or support services available to you, such as senior services, legal advice, or counseling?
            <ChakraBox
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              <div>Complete</div>
            </ChakraBox>
          ) : (
            questionIndex === null(<RegistryComplete />)
          )}
        </AnimatePresence>
      </ChakraBox>
    </ChakraBox>
  );
}

export default AssaultAnswers;
