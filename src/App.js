import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RegistryCreate from './components/registry/RegistryCreate';
import RegistryEdit from './components/registry/RegistryEdit';
import RegistryDelete from './components/registry/RegistryDelete';
import RegistryList from './components/registry/RegistryList';
import RegistryShow from './components/registry/RegistryShow';
import AssailantsName from "./components/registry/Questions/1assailantsName";

const PageOne = () => {
  return (
    <div>OSAR</div>
  )
}

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path="/AssailantsName" component={AssailantsName} />
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
