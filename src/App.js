// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Alerts from "./Components/Alerts";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlerts] = useState(null);
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Black"; // to change background

      showAlerts("Dark Mode has been enabled !!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlerts("Dark Mode has been disabled !!!", "success");
    }
  };

  // We wrap meesage and type on {} bcz that is js object
  const showAlerts = (message, type) => {
    setAlerts({ message: message, type: type });

    setTimeout(() => {
      setAlerts(null);
    }, 2000);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          showAlerts={showAlerts}
        />
        {/*We are passing custom values to NavBar Components.
  We can recieve this values through props or with {title}*/}

        {/* //To show alerts */}

      <div className="container fixed-top">
      <Alerts alert={alerts} /> </div> 
      <div className="container my-3 sticky-footer text-form">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Let's Analyze"
                  mode={mode}
                  showAlerts={showAlerts}
                />
              }
            />
            <Route path="about/" element={<About mode={mode}/>} />
          </Routes>
      </div>
      <Footer mode={mode}/>
  
      </BrowserRouter>
    </>
  );
}

export default App;
