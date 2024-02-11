import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Router>
        <Header
          homeRef={homeRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Container className="custom-container" sx={{ marginTop: "75px" }}>
          <Banner ref={homeRef} />
          <ProjectSection ref={projectRef} />
          <Contact ref={contactRef} />
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
