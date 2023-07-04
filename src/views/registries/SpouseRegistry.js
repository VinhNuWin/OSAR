import { Flex, Text } from '@chakra-ui/react';
import NextButton from '../../components/buttons/NextButton';
import BackButton from '../../components/buttons/BackButton';
import { useSelector } from 'react-redux';
import SpouseQuestions from '../registryQuestions/SpouseQuestions';
import SpouseAnswers from '../registryAnswers/SpouseAnswers';
import RegistryComplete from '../pages/RegistryComplete';
import FinalSubmit from '../../components/buttons/FinalSubmit';
import MissionStatement from '../../components/modals/MissionStatement';
import spouseSlide from '../../images/PanelSlides/SpouseSlide';
import SpouseSlide from '../../images/PanelSlides/SpouseSlide';
import spouse from '../../images/elderly.png';

export default function SpouseRegistry() {
    const { registryType, index } = useSelector((state) => {
        return {
            registryType: state.index.registry.registryType,
            index: state.index.index,
        }
    })

    console.log(registryType);

    // const images = spouseSlide.map((image, index) => (
    // <img src={image.img} key={index} alt='image' />
    // )
    // )

    return (
<Flex>

        { index <= 14 ? (
            <Flex>
                <Flex className='panel-one' direction='column'>
                    <MissionStatement />
                <Flex className='panel-one-questions' >
                    <SpouseQuestions />
                </Flex>
                <Flex className='panel-one-answers'>
                    <SpouseAnswers />
                </Flex>
                    <Flex className='panel-one-buttons'>
                        <BackButton />
                        {index===14 ? <FinalSubmit /> : <NextButton />}       
                    </Flex>
                </Flex>
            </Flex>
        ) : null (
            <RegistryComplete />
        )} 


<Flex className='panel-two'>
    <img src={spouse} />
</Flex>
        </Flex>
    )
}

