import { useMediaQuery, Flex } from "@chakra-ui/react";
import BackButton from "../components/buttons/BackButton";
import NextButton from "../components/buttons/NextButton";
import SkipButton from "../components/buttons/SkipButton";
import QuestionCard from "../components/ContentBox/QuestionCard";
import RegistryResponses from "../components/RegistryResponses";
import ReportSummary from "./drawer/ReportSummary";
import SwipeButton from "../components/buttons/SwipeButton";


export default function MobileView() {

    return (
        <Flex direction='column' className='mobile-container'>
            <Flex className="mobile-header-container">
                <ReportSummary />
            </Flex>
            <Flex className=" mobile-top-container">
                <QuestionCard />
            </Flex>
            <Flex className=" mobile-middle-container">
                <RegistryResponses />
            </Flex>
            <Flex className=" mobile-bottom-container">
                {/* <SwipeButton /> */}
                <BackButton />
                <NextButton />
            </Flex>
            <Flex className="mobile-skip">
            <SkipButton />
            </Flex>
        </Flex>
    )
}