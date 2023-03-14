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
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header className="texty-demo" style={headerStyle}>
        </Header>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
          <QuestionPage style={contentStyle}/>
      </div>
      <Footer style={footerStyle}>Registry</Footer>
    </Layout>
    </Space>
  );
}

export default App;