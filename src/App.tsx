import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/Header";
import Routing from "./components/routing/Routing";
import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div className="main-wrapper">
          <div className="side-wrapper">
            <Logo icon="fa fa-linode" brand="My React App" />
            <Navigation />
          </div>
          <div className="content-wrapper">
            <Header />
            <div className="content">
              <Routing />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
