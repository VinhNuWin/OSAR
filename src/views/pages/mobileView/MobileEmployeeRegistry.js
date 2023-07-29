import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/buttons/BackButton";
import PostSubmit from "../../../components/buttons/PostSubmit";
import NextButton from "../../../components/buttons/NextButton";
import EmployeeAnswers from "../../registryAnswers/EmployeeAnswers";
import EmployeeQuestions from "../../registryQuestions/EmployeeQuestions";
import RegistryComplete from "../RegistryComplete";
import EmailSubmit from "../../../components/buttons/emailSubmit";

export default function MobileEmployeeRegistry() {
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
            <Flex className="panel-one-questions ">
              <EmployeeQuestions />
            </Flex>
            <Flex className="panel-one-answers">
              <EmployeeAnswers />
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
