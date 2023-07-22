import { Flex } from "@chakra-ui/react";
import NextButton from "../../../components/buttons/NextButton";
import BackButton from "../../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import ChildrensQuestions from "../../registryQuestions/ChildrensQuestions";
import ChildrensAnswers from "../../registryAnswers/ChildrensAnswers";
import RegistryComplete from "../../pages/RegistryComplete";
import PostSubmit from "../../../components/buttons/PostSubmit";
import EmailSubmit from "../../../components/buttons/emailSubmit";

export default function MobileChildrensRegistry() {
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
              <ChildrensQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <ChildrensAnswers />
            </Flex>
            <Flex className="panel-one-buttons">
              {index < 15 ? <BackButton /> : null}
              {index === 14 ? (
                <PostSubmit />
              ) : index === 15 ? (
                <EmailSubmit />
              ) : index < 15 ? (
                <NextButton />
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        null(<RegistryComplete />)
      )}
    </Flex>
  );
}
