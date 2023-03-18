import QuestionPage from './pages/QuestionPage';
import HomePage from './pages/HomePage';
// import Route from "./components/Route";
import Button from 'antd';
import ButtonPage from './pages/ButtonPage';
import Link from './components/Link';
import { render } from 'less';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  return (
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/registry" element={<QuestionPage />}/>
            </Routes>
          </Router>
  );
}

export default App;