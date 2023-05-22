import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    size:'md',
    height:'40px',
    width:'600px',
    border:'2px',
    borderColor:'green.500',
    bg:'white',
    borderColor:'green',
    color:'rgb(97, 202, 146)',
    _focus:{
      boxShadow: 'outline',
    }
});

const nextButton = defineStyle({
  
  size:'md',
  height:'48px',
  width:'300px',
  border:'2px',
  borderColor:'green.500',
  bg:'rgb(97, 202, 146)',
  borderColor:'green',
  color:'white',
  _hover:{ bg: '#ebedf0' },
  _focus:{
    boxShadow: 'outline',
  }
});

const backButton = defineStyle({
  size:'md',
  height:'48px',
  width:'300px',
  border:'2px',
  borderColor:'green.500',
  bg:'white',
  borderColor:'rgb(97, 202, 146)',
  color:'rgb(97, 202, 146)',
  _hover:{ bg: '#ebedf0' },
  _focus:{
    boxShadow:
      'grey',
  }
});

const skipButton = defineStyle({
  size:'md',
  height:'48px',
  width:'100px',
  color:'rgb(97, 202, 146)',
  _focus:{
    boxShadow: 'outline',
  },
  _hover:{ bg: '#ebedf0' },
  _active:{
    bg: '#dddfe2',
    transform: 'scale(1.03)',
    borderColor: '#bec3c9',
  },
  _focus:{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  },
});

const booleanButton = defineStyle({
  size:'md',
  height:'50px',
  width:'100px',
  borderRadius: '5px',
  border:'2px',
  borderColor:'green.500',
  bg:'white',
  borderColor:'green',
  color:'rgb(97, 202, 146)',
  _focus:{
    boxShadow: 'outline',
  }
});

const selectButton = defineStyle({
  size:'md',
  height:'40px',
  width:'100px',
  borderRadius: '10px',
  border:'2px',
  borderColor:'green.500',
  bg:'white',
  borderColor:'green',
  color:'rgb(97, 202, 146)',
  _hover:{ bg: '#ebedf0' },
  _active:{
    bg: '#dddfe2',
    transform: 'scale(1.03)',
    borderColor: '#bec3c9',
  },
  _selected:{
    bg: '#dddfe2',
    transform: 'scale(1.03)',
    borderColor: '#bec3c9',
  },
  _focus:{
    boxShadow: 'outline',
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, skipButton, nextButton, backButton, booleanButton, selectButton },
})