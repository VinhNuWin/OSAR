import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function ElderlyQuestions() {
  const { elderlyForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      elderlyForm: state.form.elderlyForm,
    };
  });

  const elderlyIndex = index;
  const questions = elderlyForm[elderlyIndex];

  console.log(questions);
  console.log();

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          <QuestionIndexSummary />
          <motion.h1
            className=""
            key={elderlyIndex}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="close"
          >
            {questions}
          </motion.h1>
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}
