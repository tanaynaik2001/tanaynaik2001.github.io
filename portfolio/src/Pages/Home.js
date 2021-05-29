import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Typography from "@material-ui/core/Typography";
import tanay from "../utils/images/tanay.JPG";
import Navabar from "../components/Navbar";
import Footer from "../components/Footer";
import YoutubeCard from "../components/YoutubeCard";

const useStyles = makeStyles((theme) => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "50%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const StyledImg = styled.img`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  width: 310px;
  height: 340px;
  border-radius: 20%;
  transition: 0.5s ease;
  float: left;
`;

const StyledDiv = styled.div`
  width: 100%;
  margin-top: 10%;
  @media (max-width: 630px) {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  background-color: #1e1e30;
`;

const StyledText = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  transition: 1s ease;
  @media (max-width: 630px) {
    margin-left: 0;
  }
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  letter-spacing: 3px;
  color: #eee;
  @media (max-width: 900px) {
    font-size: 56px;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 630px) {
    text-align: center;
  }
`;

const StyledH3 = styled.h3`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
  color: #eee;
  font-size: 20px;
`;

const StyledP = styled.p`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
  color: #eee;
  font-size: 16px;
`;

export default function Profile() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: "#1e1e30", height: "auto" }} id="about">
      <StyledDiv>
        <StyledImg src={tanay}></StyledImg>
        <StyledText>
          <StyledH1 style={{ textAlign: "center", fontWeight: "200" }}>
            ABOUT
          </StyledH1>
          <StyledH1>Hey There {"\u270B"}! I am Tanay Naik</StyledH1>
          <StyledH3>
            II<sup>nd</sup> Year Computer Engineering Student @Dwarkadas J.
            Sanghvi College of Engineering.
          </StyledH3>
          <StyledP
            style={{
              color: "#eee",
            }}
          >
            I started my Web Development journey in May 2020, starting with
            frontend and learned HTML, CSS, and then moved on to backend in
            which i explored Django.Then I started with JAVASCRIPT, React and
            its libraries. After doing REACT I did REACT NATIVE and found my
            interest in REACT NATIVE App Development. I have also built and
            collaborated in full stack + app projects and hackathons.
          </StyledP>
          <StyledP
            style={{
              color: "#eee",
            }}
          >
            Recently I have found my interest in Data Science and wish to
            progress in that field.
          </StyledP>
        </StyledText>
      </StyledDiv>
    </div>
  );
}
