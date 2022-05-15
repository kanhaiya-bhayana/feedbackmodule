import "./App.css";
import { Navbar } from "./MyComponents/Navbar";
import { Footer } from "./MyComponents/Footer";
import { Home } from "./MyComponents/Home";
import { About } from "./MyComponents/About";
import { Feedback } from "./MyComponents/Feedback";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CannotAccess } from "./MyComponents/CannotAccess";
import { Thankyou } from "./MyComponents/Thankyou";
import { useState } from "react";
import { Error } from "./MyComponents/Error";

function App() {
  const [title, setTitle] = useState("");
  const [records, setRecords] = useState([]);
  const [caseThank, setCasethank] = useState("false");

  let footerStyle = {
    minHeight: "70.2vh",
    margin: "50px auto",
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={footerStyle}>
                  <Home title={title} setTitle={setTitle} />
                </div>
              </>
            }
          />
          <Route
            path="/feedback"
            element={
              <>
                <div style={footerStyle}>
                  {title ? (
                    <Feedback
                      title={title}
                      setTitle={setTitle}
                      records={records}
                      setRecords={setRecords}
                      setCasethank={setCasethank}
                    />
                  ) : (
                    <CannotAccess />
                  )}
                </div>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div style={footerStyle}>
                  <About />
                </div>
              </>
            }
          />

          <Route
            path="/error"
            element={
              <>
                <div style={footerStyle}>
                  <Error />
                </div>
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <div style={footerStyle}>
                  <CannotAccess />
                </div>
              </>
            }
          />
          <Route
            path="/thankyou"
            element={
              <>
                <div style={footerStyle}>
                  {caseThank ? <CannotAccess /> : <Thankyou />}
                </div>
              </>
            }
          />
          {/* </div> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// creates an instance of a person  