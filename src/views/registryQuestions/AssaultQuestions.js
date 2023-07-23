import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function AssaultQuestions() {
  const { assaultForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      assaultForm: state.form.assaultForm,
    };
  });

  const assaultIndex = index;
  const questions = assaultForm[assaultIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          <QuestionIndexSummary />
          <motion.h1
            className=""
            key={assaultIndex}
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
