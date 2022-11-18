import React from "react";
import { Routes, Route } from 'react-router-dom'

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Iphone from "./Components/Iphone/Iphone";
import Four04 from "./Components/Four04/Four04";
import Mac from './Components/NavRoute/Mac'
import Ipad from './Components/NavRoute/Ipad'
import TV from './Components/NavRoute/Tv'
import Music from './Components/NavRoute/Music'
import Support from './Components/NavRoute/Support'
import Watch from './Components/NavRoute/Watch'
import ProductPage from "./Components/ProductPage/ProductPage";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Main />} />
          <Route path={"/"} element={<Main />} />
        {/* </Route> */}
        <Route path="/iphone" element={<Iphone/>} />
        <Route path="/iphone/:productID" element={<ProductPage/>} />
        {/* <Route path="*" element={"Abebe"} /> */}
        <Route path="*" element={<Four04/>} />
        <Route path="/mac" element={<Mac/>} />
        <Route path="/ipad" element={<Ipad/>} />
        <Route path="/tv" element={<TV/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/watch" element={<Watch/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
