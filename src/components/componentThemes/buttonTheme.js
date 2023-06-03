import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    size:'md',
    height:'40px',
    width:'600px',
    border:'2px',
    borderColor:'rgb(73, 79, 86)',
    bg:'white',
    borderColor:'rgb(73, 79, 86)',
    color:'rgb(97, 202, 146)',
    _focus:{
      boxShadow: 'outline',
      color: 'rgb(73, 79, 86)',
    }
});

const nextButton = defineStyle({
  borderRadius: 0,
  size:'md',
  height:'60%',
  width:'20%',
  border:'2px',
  borderColor:'rgb(73, 79, 86)',
  marginTop: '5%',
  marginRight: '5%',
  color:'rgb(73, 79, 86)',
  _hover:{ 
    bg: '#ebedf0',
    color: 'black' 
  },
  _focus:{
    boxShadow: 'outline',
  }
});

const backButton = defineStyle({
  borderRadius: 0,
  size:'md',
  height:'60%',
  width:'20%',
  border:'2px',
  borderColor:'rgb(73, 79, 86)',
  marginBottom: '5%',
  marginLeft: '5%',
  color:'rgb(73, 79, 86)',
  _hover:{ 
    bg: '#ebedf0',
    color: 'black' 
  },
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
  // size:'md',
  margin: 1,
  height:'50px',
  width:'50vw',
  borderRadius: '5px',
  border:'2px',
  bg:'white',
  borderColor:'rgb(73, 79, 86)',
  color:'black',
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
  bg:'white',
  borderColor:'white',
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