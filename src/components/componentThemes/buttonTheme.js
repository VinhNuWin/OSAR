import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  height: "40px",
  width: "150px",
  border: "2px",
  borderColor: "rgb(73, 79, 86)",
  bg: "rgb(91,100,233)",
  color: "white",
  _focus: {
    boxShadow: "outline",
    color: "rgb(73, 79, 86)",
  },
  _active: {
    // boxShadow: "inset 0px 3px 7px #d6d6e7",
    transform: " translateY(-5px)",
  },
  _focus: {
    boxShadow: "0px 0px 0 2px #ffffff, 0 0 3px 5px #3a97f9",
  },
});

const nextButton = defineStyle({
  height: "40px",
  width: "100%",
  border: "2px",
  borderColor: "rgb(73, 79, 86)",
  bg: "rgb(91,100,233)",
  color: "white",
  _hover: {
    bg: "#ebedf0",
    color: "black",
    boxShadow:
      "0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #d6d6e7",
    transform: "translateY(-2px)",
  },
  _focus: {
    boxShadow: "grey",
  },
  _active: {
    bg: "#dddfe2",
    transform: "scale(1.03)",
    borderColor: "#bec3c9",
    boxShadow: "outline",
  },
});

const backButton = defineStyle({
  width: "50%",
  boxShadow:
    "0px 1px 1px rgba(1, 0, 0, .51), 1px 1px 1px 1px rgba(0, 0, 0, 0.04)",
  borderColor: "rgb(73, 79, 86)",
  color: "rgb(255, 255, 233)",
  colorScheme: "teal",
  _hover: {
    bg: "#ebedf0",
    color: "black",
    boxShadow:
      "0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #d6d6e7",
    transform: "translateY(-2px)",
  },
  _focus: {
    boxShadow: "grey",
  },
});

const skipButton = defineStyle({
  size: "md",
  // height:'15%',
  // width:'50%',
  // borderTop: '1px',
  // borderBottom: '1px',
  marginRight: "",
  _focus: {
    boxShadow: "outline",
  },
  _hover: { bg: "#ebedf0" },
  _active: {
    bg: "#dddfe2",
    transform: "scale(1.03)",
    borderColor: "#bec3c9",
  },
  _focus: {
    boxShadow:
      "0px 1px 1px rgba(1, 0, 0, .51), 1px 1px 1px 1px rgba(0, 0, 0, 0.04)",
    // boxShadow:
    //   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  },
});

const selectButton = defineStyle({
  // size:'lg',
  colorScheme: "teal",
  height: "50px",
  width: "300px",
  margin: "5%",
  borderRadius: "10px",
  border: "2px",
  bg: "white",
  borderColor: "rgb(157, 150, 139)",
  color: "rgb(157, 150, 139)",
  _hover: { bg: "#80ffd3" },
  _active: {
    bg: "#dddfe2",
    transform: "scale(1.03)",
    borderColor: "#bec3c9",
    boxShadow: "outline",
  },
  _selected: {
    bg: "#dddfe2",
    transform: "scale(1.03)",
    borderColor: "#bec3c9",
  },
  _focus: {
    boxShadow: "outline",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    brandPrimary,
    skipButton,
    nextButton,
    backButton,
    selectButton,
  },
});
