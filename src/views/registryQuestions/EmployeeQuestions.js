import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { Flex, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { itemVariants } from "../../data/containerVariants";
import QuestionIndexSummary from "../../components/QuestionIndexSummary";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function EmployeeQuestions() {
  const { employeeForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      employeeForm: state.form.employeeForm,
    };
  });

  const employeeIndex = index;
  const questionIndex = index - 1;
  const questions = employeeForm[employeeIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
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
          <div className="index-summary">of 13</div>
        </div>
        <AnimatePresence mode="wait">
          <motion.h1
            className=""
            key={employeeIndex}
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
