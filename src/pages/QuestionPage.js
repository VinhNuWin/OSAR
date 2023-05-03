import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';
import ButtonCard from '../components/ButtonCard';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import HomePage from '../components/HomePage';
import { useSelector } from 'react-redux';

function QuestionPage() {

    const { index } = useSelector((state) => {
        return {
        index: state.index.index,
        }
    })
    
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, type: 'spring', stiffness: 3 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
        };


    return (
        <div>
        {index === 0 ? ( //when did the incident occur "date"
            <div className=''>
                    <HomePage />
            </div>
        ) : index > 0 ?
        <div className="wrapper">
            <Card className="">
            <CardHeader className="center2">
                <Questions />
            </CardHeader>
            <motion.div className='answerCard center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <AnswerCard />
            </motion.div>
            <div className="button">
                <ButtonCard />
            </div>
            </Card>
        </div>
         : index === null (
            <div>
            An error has accord
            </div>
        )
            }
            </div>
    )
};

export default QuestionPage;


