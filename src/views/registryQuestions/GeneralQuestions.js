import { Flex, Text, FormControl, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function GeneralQuestions() {
  const { generalForm, index, anonymous } = useSelector((state) => {
    return {
      index: state.index.index,
      generalForm: state.form.generalForm,
      anonymous: state.index.registry.anonymous,
    };
  });

  const generalIndex = index;
  const questions = generalForm[generalIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          <QuestionIndexSummary />
          <motion.h1
            className=""
            key={generalIndex}
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
