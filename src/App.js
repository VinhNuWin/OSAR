import QuestionPage from './pages/QuestionPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route, useNavigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}/>
      <Route path="/registry" element={<QuestionPage />}/>
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