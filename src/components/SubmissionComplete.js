import Typewriter from "typewriter-effect";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function SubmissionComplete() {
  const { registryType } = useSelector((state) => {
    return {
      registryType: state.index.registry.registryType,
    };
  });
  return (
    <div className="submissionComplete-wrapper">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Thank you for sharing your story with Documented Voices. We recognize how difficult this step can be, and we commend your bravery. Your voice has been heard and your experience has been documented. Please remember, you are not alone. Your story matters and can make a difference. If you need further support or guidance, don’t hesitate to explore the resources available on our platform. We’re here for you every step of the way. Stay strong and continue to heal at your own pace. We’re proud of you."
            )
            .start();
        }}
      />
    </div>
  );
}
