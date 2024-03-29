import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function SpouseQuestions() {
  const { spouseForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      spouseForm: state.form.spouseForm,
    };
  });

  const spouseIndex = index;
  const questionIndex = index - 1;
  const questions = spouseForm[spouseIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          {questionIndex < 10 ? (
            <div className="index-summary-wrapper">
              <div className="index-summary">Question</div>
              <AnimatePresence mode="wait">
                <motion.div
                  className="index-summary-component"
                  key={questionIndex}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="close"
                >
                  {questionIndex}
                </motion.div>
              </AnimatePresence>
              <div className="index-summary">of 9</div>
            </div>
          ) : questionIndex === 10 ? (
            <motion.div
              className="index-summary-wrapper"
              key={questionIndex}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              Registry Complete
            </motion.div>
          ) : questionIndex === 11 ? (
            <motion.div
              className="index-summary-wrapper"
              key={questionIndex}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="close"
            >
              For additional support please reach out
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.h1
            className="question-container"
            key={spouseIndex}
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
