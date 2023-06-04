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

  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Incident' },
    { title: 'Third', description: 'Assailant' },
  ]
  
  export default function RegistryStepper() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    });

    console.log(activeStep);

  
    return (
      <Flex className='registry-stepper'>
      <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
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
  