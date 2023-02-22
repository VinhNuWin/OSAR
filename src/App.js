import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import QuestionPage from './pages/QuestionPage';

function App() {

  return (
    <div>
      {/* <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link> */}
      <Link to="/registry">Begin</Link>
      <div>
        {/* <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route> */}
        <Route path="/registry">
          <QuestionPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
