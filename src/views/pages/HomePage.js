import Registry from "./Registry";
import RegistryComplete from "./RegistryComplete";
import { motion } from "framer-motion";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import SignIn from "./SignIn";
import MobileSignIn from "./mobileView/MobileSignIn";
import { useSelector } from "react-redux";
import {
  container,
  containerVariants,
  item,
  itemVariants,
  listVariants,
} from "../../data/containerVariants";
import MobileRegistrySelect from "./mobileView/MobileRegistrySelect";
import RegistrySelect from "../registries/RegistrySelect";

// const ChakraBox = chakra(motion.div, {
//     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
//   });

function HomePage() {
  const [isLargerThan568] = useMediaQuery(["(min-width: 568px)"]);

  const { index } = useSelector((state) => {
    return {
      index: state.index.index,
    };
  });

  const questionPageIndex = index;

  return (
    <div>
      <Flex></Flex>
      <motion.div className="Homepage">
        {questionPageIndex === 0 ? (
          <center>
            <motion.div key={questionPageIndex}>
              {isLargerThan568 ? <SignIn /> : <MobileSignIn />}
            </motion.div>
          </center>
        ) : questionPageIndex === 1 ? (
          <div>
            {isLargerThan568 ? <RegistrySelect /> : <MobileRegistrySelect />}
          </div>
        ) : questionPageIndex >= 2 ? (
          <div>
            <motion.div className="wrapper-block">
              <Registry />
            </motion.div>
          </div>
        ) : (
          null()
        )}
      </motion.div>
    </div>
  );
}

export default HomePage;
