import QuestionPage from './pages/QuestionPage';
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
      <QuestionPage />
    </ChakraProvider>
  );
}

export default App;