import HomePage from './views/pages/HomePage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { buttonTheme } from "./components/componentThemes/buttonTheme";

function App() {

  const theme = extendTheme({
    components: {
      Button: buttonTheme,
    }
  });
  
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;