import QuestionPage from './pages/QuestionPage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { buttonTheme } from "./components/componentThemes/buttonTheme";
import Home from './components/ContentBox/Home';

function App() {

  const theme = extendTheme({
    components: {
      Button: buttonTheme,
    }
  });
  
  return (
    <ChakraProvider theme={theme}>
      <Home />
      {/* <QuestionPage /> */}
    </ChakraProvider>
  );
}

export default App;