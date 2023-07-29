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
  const questionIndex = index - 1;
  const questions = elderlyForm[elderlyIndex];

  console.log(questions);
  console.log();

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          {questionIndex < 13 ? (
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

              <div className="index-summary">of 12</div>
            </div>
          ) : questionIndex === 13 ? (
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
          ) : questionIndex === 14 ? (
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
