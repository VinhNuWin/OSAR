import QuestionPage from './pages/QuestionPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TestCard from './components/TestCard';

function App() {

  return (
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/registry" element={<QuestionPage />}/>
              <Route path="/testcard" element={<TestCard />}/>
            </Routes>
          </Router>
  );
}

export default App;