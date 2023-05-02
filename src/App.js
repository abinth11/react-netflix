import "./App.css";
import React from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import RowPost from "./Components/Rowpost/Rowpost";
import { rowPostData } from "./Constants/rowPost.js"
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      {rowPostData?.map((item) => (
        <RowPost url={item?.url} title={item?.title} isSmall={item?.isSmall?'isSmall':''} />
      ))}
    </div>
  );
}

export default App;
