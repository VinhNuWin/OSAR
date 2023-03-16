import QuestionPage from './pages/QuestionPage';
import { Layout, Space } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

function App() {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
      <h1 className='grid place-content-center text-2xl'><Texty
      duration={1000}
      delay={500}
      >OSAR</Texty>
      </h1>
      <div className="grid place-content-center h-96">
          <QuestionPage className='' />
      </div>
      </div>
  );
}

export default App;