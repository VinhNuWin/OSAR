import { Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import NextButton from "../../components/buttons/NextButton";
import BackButton from "../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import SpouseQuestions from "../registryQuestions/SpouseQuestions";
import SpouseAnswers from "../registryAnswers/SpouseAnswers";
import RegistryComplete from "../pages/RegistryComplete";
import PostSubmit from "../../components/buttons/PostSubmit";
import spouse from "../../images/elderly.png";
import { motion, isValidMotionProp } from "framer-motion";
import EmailSubmit from "../../components/buttons/emailSubmit";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function SpouseRegistry() {
  const { index } = useSelector((state) => {
    return {
      index: state.index.index,
    };
  });

  return (
    <Flex>
      {index <= 100 ? (
        <Flex>
          <Flex className="panel-one" direction="column">
            <Flex className="header" />
            <Flex className="panel-one-questions">
              <SpouseQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <SpouseAnswers />
            </Flex>
            <Flex className="panel-one-buttons">
              {index < 11 ? <BackButton /> : null}
              {index === 10 ? (
                <PostSubmit />
              ) : index === 11 ? (
                <EmailSubmit />
              ) : index < 11 ? (
                <NextButton />
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        null(<RegistryComplete />)
      )}

      <Flex className="panel-two">
        <img src={spouse} />
      </Flex>
    </Flex>
  );
}
