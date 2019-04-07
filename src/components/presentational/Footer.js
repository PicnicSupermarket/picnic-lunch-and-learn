import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  padding: 64px 0px 0px 0px;
`;

const FooterHeader = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;
`;

const FooterParagraph = styled.p`
  color: #ffffff;
  padding-top: 16px;
`;

export class Footer extends React.Component {
  render() {
    return (
      <FooterStyle>
        <FooterHeader>Questions about Lunch and Learn?</FooterHeader>
        <FooterParagraph>
          Contact Robert Carosi or Ernir Þorsteinsson.
        </FooterParagraph>
      </FooterStyle>
    );
  }
}
