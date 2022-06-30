import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
function App() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.counter);
  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
