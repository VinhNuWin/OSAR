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
  size:'md',
  // height:'100%',
  // width:'100%',
  border:'2px',
  // borderColor:'rgb(73, 79, 86)',
  // margin: '5%',
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
  width:'50%',
  boxShadow: '0px 1px 1px rgba(1, 0, 0, .51), 1px 1px 1px 1px rgba(0, 0, 0, 0.04)',
  borderColor:'rgb(73, 79, 86)',
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
  // height:'15%',
  // width:'50%',
  // borderTop: '1px',
  // borderBottom: '1px',
  marginRight: '',
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
    boxShadow: '0px 1px 1px rgba(1, 0, 0, .51), 1px 1px 1px 1px rgba(0, 0, 0, 0.04)',
    // boxShadow:
    //   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  },
});

const booleanButton = defineStyle({
  // size:'xl',
  border: '1px',
  // height:'100%',
  // width:'100%',
  // color:'rgb(97, 202, 146)',
  // marginRight: '',
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

const selectButton = defineStyle({
  // size:'lg',
  colorScheme: 'teal',
  height: '50px',
  width:'300px',
  margin: '5%',
  borderRadius: '10px',
  border:'2px',
  bg:'white',
  borderColor:'rgb(157, 150, 139)',
  color:'rgb(157, 150, 139)',
  _hover:{ bg: '#80ffd3' },
  _active:{
    bg: '#dddfe2',
    transform: 'scale(1.03)',
    borderColor: '#bec3c9',
    boxShadow: 'outline',
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