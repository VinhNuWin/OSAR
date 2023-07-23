import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function ChildrensQuestions() {
  const { childrensForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      childrensForm: state.form.elderlyForm,
    };
  });

  const childrensIndex = index;
  const questions = childrensForm[childrensIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          <QuestionIndexSummary />
          <motion.h1
            className=""
            key={childrensIndex}
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
