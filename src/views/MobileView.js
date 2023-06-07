import { useMediaQuery, Flex } from "@chakra-ui/react";
import BackButton from "../components/buttons/BackButton";
import NextButton from "../components/buttons/NextButton";
import QuestionCard from "../components/ContentBox/QuestionCard";
import RegistryResponses from "../components/RegistryResponses";


export default function MobileView() {

    return (
        <Flex direction='column' className='mobile-container'>
            <Flex className=" mobile-top-container">
                <QuestionCard />
            </Flex>
            <Flex className=" mobile-top-container2">
                <RegistryResponses />
            </Flex>
            <Flex className=" mobile-top-container3">
                <BackButton />
                <NextButton />
            </Flex>
        </Flex>
    )
}