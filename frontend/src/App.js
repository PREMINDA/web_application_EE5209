import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CollectionPage from "./Pages/Collection/CollectionPage";

import RegistrationPage from "./Pages/Regstration/RegistrationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/Home/Home";
import HeaderComponent from "./Components/Header/HeaderComponent";
import DashBoard from "./Pages/DashBoard/DashBoard";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <>
        <HeaderComponent />
        <main className="py-3">
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/collection" component={CollectionPage} />
          <Route path="/dashboard" component={DashBoard} />
          <Route exact path="/" component={Home} />
        </main>
      </>
    </Router>
  );
}

export default App;
