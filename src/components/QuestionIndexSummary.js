import { FormControl, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function QuestionIndexSummary() {
  const { registryType, index } = useSelector((state) => {
    return {
      index: state.index.index,
      registryType: state.index.registry.registryType,
    };
  });

  const questionIndex = index - 1;

  return (
    <div>
      {registryType === "employee" && questionIndex <= 14 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 14
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : registryType === "children" && questionIndex <= 10 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 10
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : registryType === "spouse" && questionIndex <= 10 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 10
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : registryType === "assault" && questionIndex <= 17 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 17
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : registryType === "elderly" && questionIndex <= 13 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 13
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : registryType === "general" && questionIndex <= 8 ? (
        <motion.div>
          <FormControl>
            <FormLabel color="#3a97f9" fontWeight={400}>
              Question {questionIndex} of 8
            </FormLabel>
          </FormControl>
        </motion.div>
      ) : (
        <motion.div></motion.div>
      )}
    </div>
  );
}
