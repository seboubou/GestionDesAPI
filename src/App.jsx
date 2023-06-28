import Router from "./components/navigation/Router"
import ScrollToTop from "./components/pages/ScrollToTop";
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from "react";


function App() {
 
  return (
    <div className="app">
      <Router />
      <ScrollToTop />
    </div>
  )
}

export default App
