import React, { Component } from 'react';

import Tabletop from 'tabletop'
import "typeface-roboto";
import styled from 'styled-components';

import './App.css';

import { Wrapper } from "picnic-react-mise-en-place";
import { ImageBanner } from "picnic-react-mise-en-place";
import { Row, Col } from "picnic-react-mise-en-place";
import { SolidBanner } from "picnic-react-mise-en-place";

import { Collapse } from "./components/presentational/Collapse"
import { Footer } from "./components/presentational/Footer"
import { TopHeader } from "./components/presentational/TopHeader"

import imageBanner from "./images/banner.jpg";

const Header = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  margin: 0px;
  padding: 0px;
`;

function parseDate(date) {
  var parts = date.split("-");
  return new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      schedule: null
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1W7b-D6fTvRjs5n3tBx_MQ2Q8WeeK5Kt2IyNwzFdO8tM',
      callback: googleData => {
        let futureTalks = googleData.filter((item) => {
          let scheduledDate = parseDate(item["Date"])
          let now = new Date()
          return now <= scheduledDate && item["Topic"].length > 0 && item["Speaker (slack handle)"].length > 0
        })
        this.setState({
          schedule: futureTalks
        })
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <nav>
            <TopHeader />
          </nav>
          <ImageBanner image={imageBanner} height="344px" />
          <Wrapper>
            <Header>
              Lunch &amp; Learn
            </Header>
            <Paragraph>
              The purpose of Lunch &amp; Learn is to give all Picnic’ers the opportunity to present something they are excited about.
            </Paragraph>
            <Paragraph>
              In contrast to the presentation on Monday morning the topic and format of the presentation is completely up to the speaker, with the only requirement that it is something you think is useful or interesting to others.
            </Paragraph>
            <Header>
              Schedule
            </Header>
            {
               this.state.schedule == null
               ? <Row style={{ height: "40px", borderBottom: "solid 1px #333333", lineHeight: "40px" }}><Col span="12">Loading the schedule</Col></Row>
               : this.state.schedule.map((item, i) => {
                 return (
                  <Row key={`item-${i}`} style={{ height: "40px", borderBottom: "solid 1px #333333", lineHeight: "40px" }}>
                    <Col span="2">{item["Date"]}</Col>
                    <Col span="3">{item["Speaker (slack handle)"]}</Col>
                    <Col span="7">{item["Topic"]}</Col>
                  </Row>                
                 )
               })
            }
            <Header>
              Concrete examples of talks
            </Header>
            <Collapse
              items={[
                {
                  heading: "Two Projects, One Repo",
                  expansion: "What happens when a Picnic backend lives together with the clients in the same repository? Here’s what we have learned."
                },
                {
                  heading: "What Does the Picnic Auth Proxy Actually Do? ",
                  expansion: "A showcase of how we used the auth proxy setup in the runner app, the obstacles we have overcome and those we are still struggling with."
                },
                {
                  heading: "Embedded PostgreSQL testing",
                  expansion: "Blurring the line between integration tests and unit tests."
                },
                {
                  heading: "How do we migrate all production services without downtime?",
                  expansion: "This involves some nontrivial DNS magic that is interesting enough for everybody to know about it."
                }
              ]}
            />
            <Header>
              Practical advice
            </Header>
            <Collapse
              items={[
                {
                  heading: "Keep in mind that the talks are short",
                  expansion: "20 minutes is a very short time, less than what we frequently see during the Monday standup. The number of points that can be covered during that time is limited. Talks taking longer than initially anticipated is very common, prioritize the points you would like to make during the talk, to better prepare yourself for having to cut off early."
                },
                {
                  heading: "Large topic? Decide whether to go deep or to go wide",
                  expansion: "It is not possible to a large topic proper justice in a short amount of time. If you have a large topic you’d live to cover in a Lunch & Learn, you must decide whether to give a high-level overview of your topic, or whether to drill down into a single implementation detail. Consider whether you could or should split the topic over more than one talk."
                },
                {
                  heading: "Small topics are not too small",
                  expansion: "A topic does not have to have been a complete game-changer for you or your team to be interesting to a wider audience. The format of the talks allows us to share and examine small implementation details and minor improvements that might otherwise go unnoticed by others."
                },
                {
                  heading: "You’re an expert, you can do this",
                  expansion: "Don’t worry about whether you know enough to share something that is interesting to others. You do. Whether it’s a bit of software you wrote or something external you’d like to present, when you prepare to give a talk about it, you are virtually guaranteed to become the person in the room most familiar with the topic. And even if the others know something similar, your perspective is still interesting. Sharing these perspectives is how we learn! You’re giving a talk on a subject you know. You have nothing to worry about."
                }
              ]}
            />
          </Wrapper>
          <Paragraph>
            &nbsp;
          </Paragraph>
          <SolidBanner height="526px" background="#333333">
            <Wrapper>
              <Footer />
            </Wrapper>
          </SolidBanner>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default App;
