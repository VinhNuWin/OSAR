import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    Container,
    Heading,
    Button,
    VStack,
    HStack,
    Tag
  } from "@chakra-ui/react";
  import FaqCarousel from '../carousel/FaqCarousel';
import ThingsToConsider from '../../data/ThingsToConsider';

export default function FAQ () {
    const { index } = useSelector((state) => {
        return {
            index: state.index.index
        }
    });

    const [ faqs, setFaqs ] = useState([
      {
          question: 'Emotional well-being',
          response: 'You may feel that reporting would be too overwhelming or retraumatizing.',
      },
      {
          question: 'Fear of retaliation',
          response: 'You may have concerns about potential retaliation from the perpetrator or others associated with them.'
      },
      {
          question: 'Privacy concerns',
          response: 'Reporting can involve sharing personal details, and you may value your privacy and wish to keep the assault private.', 
      },
      {
          question: 'Lack of evidence',
          response: 'You might feel that theres insufficient evidence to support your case, making the reporting process more challenging.', 
      },
      {
          question: 'Fear of disbelief',
          response: 'You may worry about not being believed or facing skepticism or judgment from authorities or others.', 
      },
      {
          question: 'Reluctance to engage with the legal system',
          response: 'The legal process can be complex and lengthy, and you might prefer to avoid involvement in it.', 
      },  
      {
          question: 'Desire to move forward',
          response: 'You might want to focus on healing and moving forward with your life rather than dwelling on the assault.' 
      },  
      {
          question: 'Cultural or community pressures',
          response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },
      {
        question: 'Cultural or community pressures',
        response: 'Factors such as cultural norms or community dynamics may influence your decision not to report.', 
      },

  ]);

  const considerThis = faqs[index];

  console.log(considerThis);

  return (
    <Flex direction='column' className='faq-card'>
      <Flex className='faq-question'>
        <Text as='b'>{considerThis.question}</Text>
      </Flex>
      <Flex className='faq-response'>
        <Text fontSize='sm'>{considerThis.response}</Text>
      </Flex>
    </Flex>
  );
}



        
            
        