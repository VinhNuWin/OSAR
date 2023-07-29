import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

export default function ChildrensQuestions() {
  const { childrensForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      childrensForm: state.form.childrensForm,
    };
  });

  const childrensIndex = index;
  const questionIndex = index - 1;
  const questions = childrensForm[childrensIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          {questionIndex < 8 ? (
            <div className="index-summary-wrapper">
              <div className="index-summary">Question</div>

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

              <div className="index-summary">of 7</div>
            </div>
          ) : questionIndex === 9 ? (
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
          ) : questionIndex === 10 ? (
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
