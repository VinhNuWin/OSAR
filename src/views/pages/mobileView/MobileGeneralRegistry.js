import { Flex, shouldForwardProp, chakra } from "@chakra-ui/react";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import GeneralQuestions from "../../registryQuestions/GeneralQuestions";
import GeneralAnswers from "../../registryAnswers/GeneralAnswers";
import PostSubmit from "../../../components/buttons/PostSubmit";
import MissionStatement from "../../../components/modals/MissionStatement";
import EmailSubmit from "../../../components/buttons/emailSubmit";
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { itemVariants } from "../../../data/containerVariants";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function MobileGeneralRegistry() {
  const { registryType, index } = useSelector((state) => {
    return {
      registryType: state.index.registry.registryType,
      index: state.index.index,
    };
  });

  console.log(registryType);

  return (
    <Flex>
      {index <= 100 ? (
        <Flex>
          <Flex className="panel-one-mobile" direction="column">
            <Flex className="header" />
            <Flex className="panel-one-questions">
              <GeneralQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <GeneralAnswers />
            </Flex>
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
    </Flex>
  );
}
