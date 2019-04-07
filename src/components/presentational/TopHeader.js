import React from "react";
import logoImage from "../../images/logo@2x.png";
import styled from 'styled-components';
import { media } from "./Device";

const TopHeaderStyle = styled.div`  
  width: 100%;
  max-width: 960px;
  height: 80px;
  text-align: center;
  margin: 0 auto;
`;

const LogoStyle = styled.div` 
  width: 100%;
  width: 80px;
  height: 80px;
  float: left;
  transform: translate(0, 50%);
  filter: drop-shadow(0px 1px 2px 0px rgba(0, 0, 0, 0.3));
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
  transition: 0.1s ease-in;

  @media (hover: hover) {
    &:hover {
      transform: translate(0, 50%) rotate(-5deg);
    }
  }
  ${media.tablet`
    & {
      transform: none;
      filter: none;
      -webkit-filter: none;
      transition: none;
    }
  `};
`;

export class TopHeader extends React.Component {
  render() {
    const logoStyle = {
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${logoImage})`
    };
    return (
      <div>
        <TopHeaderStyle>
        <LogoStyle style={logoStyle} />
        </TopHeaderStyle>
      </div>
    );
  }
}
