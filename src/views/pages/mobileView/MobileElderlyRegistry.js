import { Flex } from "@chakra-ui/react";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import ElderlyQuestions from "../../registryQuestions/ElderlyQuestions";
import ElderlyAnswers from "../../registryAnswers/ElderlyAnswers";
import RegistryComplete from "../../pages/RegistryComplete";
import PostSubmit from "../../../components/buttons/PostSubmit";
import EmailSubmit from "../../../components/buttons/emailSubmit";

export default function MobileElderlyRegistry() {
  const { registryType, index, _id, email } = useSelector((state) => {
    return {
      registryType: state.index.registry.registryType,
      index: state.index.index,
      _id: state.index.registry._id,
      email: state.index.registry.email,
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
              <ElderlyQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <ElderlyAnswers />
            </Flex>
            <Flex className="panel-one-buttons">
              {index < 14 ? <BackButton /> : null}
              {index === 13 ? (
                <PostSubmit />
              ) : index === 14 ? (
                <EmailSubmit />
              ) : index < 14 ? (
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
