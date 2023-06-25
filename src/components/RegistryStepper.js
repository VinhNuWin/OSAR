import {
    Step,
    Box,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Flex
  } from '@chakra-ui/react';
import { render } from 'less';
  import { useSelector } from 'react-redux';



  const steps = [
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: 'Complete' },
    
  ]
  
  export default function RegistryStepper() {

    const { index } = useSelector((state)=> {
      return {
        index: state.index.index
      }
    })

    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    });

    console.log(activeStep);

  
    return (
      <Flex className=''>
      <Stepper index={activeStep} orientation='horizontal' height='100px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      </Flex>
    )
  }
  
  render(<RegistryStepper/>)