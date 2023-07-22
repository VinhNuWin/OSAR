import { Flex } from "@chakra-ui/react";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import SpouseQuestions from "../../registryQuestions/SpouseQuestions";
import SpouseAnswers from "../../registryAnswers/SpouseAnswers";
import RegistryComplete from "../../pages/RegistryComplete";
import PostSubmit from "../../../components/buttons/PostSubmit";
import EmailSubmit from "../../../components/buttons/emailSubmit";

export default function MobileSpouseRegistry() {
  const { index } = useSelector((state) => {
    return {
      registryType: state.index.registry.registryType,
      index: state.index.index,
      _id: state.index.registry._id,
      email: state.index.registry.email,
    };
  });

  return (
    <Flex>
      {index <= 100 ? (
        <Flex>
          <Flex className="panel-one-mobile" direction="column">
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
      ) : index === 15 ? (
        <RegistryComplete />
      ) : (
        null(<RegistryComplete />)
      )}
    </Flex>
  );
}
