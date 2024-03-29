import { Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import NextButton from "../../components/buttons/NextButton";
import BackButton from "../../components/buttons/BackButton";
import { useSelector, useDispatch } from "react-redux";
import GeneralQuestions from "../registryQuestions/GeneralQuestions";
import GeneralAnswers from "../registryAnswers/GeneralAnswers";
import PostSubmit from "../../components/buttons/PostSubmit";
import MissionStatement from "../../components/modals/MissionStatement";
import employee from "../../images/employee.png";
import { listVariants, itemVariants } from "../../data/containerVariants";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import EmailSubmit from "../../components/buttons/emailSubmit";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function GeneralRegistry() {
  const { registryType, index } = useSelector((state) => {
    return {
      registryType: state.index.registry.registryType,
      index: state.index.index,
    };
  });
  const dispatch = useDispatch();

  console.log(registryType);

  return (
    <Flex>
      <ChakraBox>
        <ChakraBox>
          {index <= 100 ? (
            <Flex>
              <Flex className="panel-one" direction="column">
                <Flex className="header" />

                <ChakraBox className="panel-one-questions">
                  <GeneralQuestions />
                </ChakraBox>
                <ChakraBox className="panel-one-answers">
                  <ChakraBox>
                    <GeneralAnswers />
                  </ChakraBox>
                </ChakraBox>

                <Flex className="panel-one-buttons">
                  {index < 9 ? <BackButton /> : null}
                  {index === 8 ? (
                    <PostSubmit />
                  ) : index === 9 ? (
                    <EmailSubmit />
                  ) : index < 9 ? (
                    <NextButton />
                  ) : null}
                </Flex>
              </Flex>
            </Flex>
          ) : (
            null()
          )}
        </ChakraBox>
      </ChakraBox>

      <Flex className="panel-two">
        <img src={employee} />
      </Flex>
    </Flex>
  );
}
