import React from "react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";

import Routes from "../../routes";

import "./App.scss";

const App = () => (
  <div data-testid="app">
    <BrowserRouter>
      <Topbar></Topbar>
      <Routes></Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
);

export default App;
