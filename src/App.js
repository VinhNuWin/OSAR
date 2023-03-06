
import QuestionPage from './pages/QuestionPage';
import { Button } from 'antd';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
          <QuestionPage />
          <Button type="primary">Button</Button>
    </div>
  );
}

export default App;