import { useMediaQuery } from '@chakra-ui/react';

function Example() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  
    return (
      <Text>
        {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
      </Text>
    )
  }