import { Flex, Text, FormControl, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../data/containerVariants";

const { generalForm, index, anonymous, anonIndex } = useSelector((state) => {
  return {
    index: state.index.index,
    generalForm: state.form.generalForm,
    anonymous: state.index.registry.anonymous,
    anonIndex: state.index.registry.anonIndex,
  };
});
