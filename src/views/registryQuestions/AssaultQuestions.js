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
  const questionIndex = index - 1;
  const questions = assaultForm[assaultIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          {questionIndex < 17 ? (
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
              <div className="index-summary">of 16</div>
            </div>
          ) : questionIndex === 17 ? (
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
          ) : questionIndex === 18 ? (
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
