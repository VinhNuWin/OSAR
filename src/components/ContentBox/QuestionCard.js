// import { Flex, Text, IconButton } from '@chakra-ui/react';
// import { useSelector } from  'react-redux';
// import { RepeatIcon } from '@chakra-ui/icons';
// import DidYouKnow from '../DidYouKnow';
// import { useEffect, useState } from 'react';

// export default function QuestionCard () {

//     const { question, index } = useSelector((state) => {
//         return {
//             index: state.index.index,
//             question: state.form.question,
//         }
//     });

//     const questionIndex = index;
//     const questions = question[questionIndex];

//     return (
//         <Flex direction='column'>
//         <Flex wrap='nowrap' direction='column' className='questions'>
//             <Text className='div-c' fontSize={{ base: '30px', md: '24px', lg: '32px' }} color='rgb(73, 79, 86)'>{questions}</Text>
//         </Flex>
//         </Flex>
//     )
// }