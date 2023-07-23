import { Flex, useMediaQuery } from "@chakra-ui/react";
import NextButton from "../../components/buttons/NextButton";
import BackButton from "../../components/buttons/BackButton";
import { useSelector } from "react-redux";
import AssaultQuestions from "../registryQuestions/AssaultQuestions";
import AssaultAnswers from "../registryAnswers/AssaultAnswers";
import RegistryComplete from "../pages/RegistryComplete";
import PostSubmit from "../../components/buttons/PostSubmit";
import assault from "../../images/assault.png";
import EmailSubmit from "../../components/buttons/emailSubmit";

export default function AssaultRegistry() {
  const [isLargerThan568] = useMediaQuery(["(min-width: 568px)"]);

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
          <Flex className="panel-one" direction="column">
            <Flex className="header" />
            <Flex className="panel-one-questions">
              <AssaultQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <AssaultAnswers />
            </Flex>
            <Flex className="panel-one-buttons">
              {index < 18 ? <BackButton /> : null}
              {index === 17 ? (
                <PostSubmit />
              ) : index === 18 ? (
                <EmailSubmit />
              ) : index < 18 ? (
                <NextButton />
              ) : null}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        null(<RegistryComplete />)
      )}
      <Flex className="panel-two">
        <img src={assault} />
      </Flex>
    </Flex>
  );
}
