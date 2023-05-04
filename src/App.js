import QuestionPage from './pages/QuestionPage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <QuestionPage />
    </ChakraProvider>
  );
}

export default App;