import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container className="custom-container" sx={{ marginTop: "75px" }}>
          <Banner />
          <ProjectSection />
          <Contact />
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
