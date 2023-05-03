import QuestionPage from './pages/QuestionPage';
import { BrowserRouter as Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<QuestionPage />}/>
    </Route>
  )
)

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;