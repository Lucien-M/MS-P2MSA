import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
import AddNote from "./components/AddNote";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdatePassword from "./components/UpdatePassword";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteCards from "./components/NoteCards";

function App() {
  // Set initial state for alert as null
  const [alert, setAlert] = useState(null);

  // Function to show alert which takes 2 args, msg & type
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      {/* Use NoteState so any child will use context */}
      <NoteState>
        <Router>
          <Header />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/notecards" element={<NoteCards />} />
              <Route exact path="/addnotes" element={<AddNote />} />
              <Route
                exact
                path="/updatepassword"
                element={<UpdatePassword />}
              />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
