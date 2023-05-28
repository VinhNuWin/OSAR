// import { useState, useSelector } from 'react';
// import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';

// // 1. Create a component that consumes the `useRadio` hook
// function RadioCard(props) {

//   const { getInputProps, getRadioProps } = useRadio(props)

//   const input = getInputProps()
//   const checkbox = getRadioProps()

 

//   return (
//     <Box as='label'>
//       <input {...input} />
//       <Box
//         {...checkbox}
//         cursor='pointer'
//         borderWidth='1px'
//         borderRadius='md'
//         boxShadow='md'
//         _checked={{
//           bg: 'teal.600',
//           color: 'white',
//           borderColor: 'teal.600',
//         }}
//         _focus={{
//           boxShadow: 'outline',
//         }}
//         px={5}
//         py={3}
//       >
//         {props.children}
//       </Box>
//     </Box>
//   )
// }

// // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
// function Example() {
//   const [isDisabled, setIsDisabled] = useState(true);
//   const options = ['No ', 'Yes'];

//   const { getRootProps, getRadioProps } = useRadioGroup({
//     name: 'framework',
//     defaultValue: 'react',
//     onChange: console.log
//   })

//   const group = getRootProps()

//   return (
//     <HStack {...group}>
//       {options.map((value) => {
//         const radio = getRadioProps({ value })
//         return (
//           <RadioCard isDisabled={isDisabled} key={value} {...radio}>
//             {value}
//           </RadioCard>
//         )
//       })}

//     </HStack>
//   )
// }



// export default Example;