import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
  background: #000000;
  color: #ffffff;
  line-height: 100px;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
       Terms & Conditions&nbsp;Privacy Policy&nbsp;Newsletter Sign Up&nbsp;Contact Us&nbsp;Events Calendar
      </FooterContainer>
    );
  }
}

export default Footer;