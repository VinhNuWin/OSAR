import QuestionPage from './pages/QuestionPage';
import HomePage from './pages/HomePage';
import Logo from './components/Logo';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  return (
        <Router>
            <Routes>
              <Route path="/" element={<Logo />}/>
              <Route path="/registry" element={<QuestionPage />}/>
            </Routes>
          </Router>
  );
}

export default App;