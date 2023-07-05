import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Nav from './components/Nav';
// import WorkDetail from "./pages/WorkDetail";
import Home from './pages/Home';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/work">
            <MyWork/>
          </Route>
          {/* <Route path="/work/:id">
            <WorkDetail/>
          </Route> */}
          <Route path="/contact">
            <ContactMe/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
