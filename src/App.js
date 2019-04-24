import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "typeface-roboto";
import "./App.css";

import { Wrapper } from "picnic-react-mise-en-place";
import { ImageBanner } from "picnic-react-mise-en-place";
import { SolidBanner } from "picnic-react-mise-en-place";

import { Footer } from "./components/presentational/Footer";
import { Paragraph } from "./components/presentational/Paragraph";
import ScrollToTop from "./components/presentational/ScrollToTop";
import { TopHeader } from "./components/presentational/TopHeader";

import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";

import imageBanner from "./images/banner.jpg";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <TopHeader />
        </nav>
        <ImageBanner image={imageBanner} height="344px" />
        <Wrapper>
          <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
              <Route exact path="/" component={Home} />
              <Route path="/notes/:id" component={Notes} />
            </ScrollToTop>
          </Router>
        </Wrapper>
        <Paragraph>&nbsp;</Paragraph>
        <SolidBanner height="526px" background="#333333">
          <Wrapper>
            <Footer />
          </Wrapper>
        </SolidBanner>
      </React.Fragment>
    );
  }
}

export default App;
