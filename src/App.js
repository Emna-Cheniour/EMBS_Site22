import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DotRing from "./components/DotRing/DotRing";
import { useContext } from "react";
import { MouseContext } from "./context/mouse-context";
import Activities2 from "./components/activities2/Activities";
import NewsLetter2 from "./components/newsletter2/NewsLetter";

function App() {
  const {  cursorChangeHandler } = useContext(MouseContext);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <DotRing />
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        ></div>
        <Router>
          <ScrollToTop />
          <Container>
            <NavBar theme={theme} themeToggler={themeToggler} />
          </Container>
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/about"
                component={() => <About theme={theme} />}
              />
              <Route exact path="/activities" component={Activities2} />
              <Route exact path="/newsletter" component={NewsLetter2} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>
          <Footer theme={theme} />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
