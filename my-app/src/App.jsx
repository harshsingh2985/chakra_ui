import React from "react"
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import Header from "./components/Header";
function App(){
  return(
    <>
    <Router>
      {/* Step 1.4 Import From Header*/}
      <Header></Header>
      <Routes>

      <Route>
       
      </Route>
      </Routes>
      
    </Router>
    </>
  )
}

export default App;
