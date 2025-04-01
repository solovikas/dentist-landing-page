import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Problems from "./pages/problems/Problems";
import Education from "./pages/education/Education";
import Supremacies from "./pages/supremacies/Supremacies";
import Services from "./pages/services/Services";
import Examples from "./pages/examples/Examples";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <main className="app">
        <Main>
          <Header />
        </Main>
        <About />
        <Problems />
        <Education />
        <Supremacies />
        <Services />
        <Examples />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
