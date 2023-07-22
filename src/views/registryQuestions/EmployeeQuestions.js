import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { Flex, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { itemVariants } from "../../data/containerVariants";

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
  const questions = employeeForm[employeeIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
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
