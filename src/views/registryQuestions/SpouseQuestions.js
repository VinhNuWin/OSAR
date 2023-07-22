import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";

export default function SpouseQuestions() {
  const { spouseForm, index } = useSelector((state) => {
    return {
      index: state.index.index,
      spouseForm: state.form.spouseForm,
    };
  });

  const spouseIndex = index;
  const questions = spouseForm[spouseIndex];

  return (
    <Flex direction="column">
      <Flex wrap="nowrap" direction="column" className="questions">
        <AnimatePresence mode="wait">
          <motion.h1
            className=""
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
