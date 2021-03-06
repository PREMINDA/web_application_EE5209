import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CollectionPage from "./Pages/Collection/CollectionPage";

import RegistrationPage from "./Pages/Regstration/RegistrationPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/Home/Home";
import HeaderComponent from "./Components/Header/HeaderComponent";
import DashBoard from "./Pages/DashBoard/DashBoard";
import GameDetail from "./Pages/GameDetail/GameDetail";
import cart from "./Pages/Cart/cart";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    document.title = "Instant GAMING"
 }, []);
  return (
    <Router>
      <div class="flex flex-col h-screen justify-between">
        <HeaderComponent />
        <main className="py-3">
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route exact path="/collection" component={CollectionPage} />
          <Route path="/collection/:id" component={GameDetail} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/cart" component={cart} />
          <Route exact path="/" component={Home} />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
