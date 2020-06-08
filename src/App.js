import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import MainContent from './components/mainContent/MainContent';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Dashboard>
       <MainContent/>
      </Dashboard>
    </div>
  );
}

export default App;
