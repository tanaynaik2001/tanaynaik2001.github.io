import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1e1e30",
    minHeight: "20vh",
    height: "auto",
    marginTop: 20,
  },
  github: {
    color: "grey",
    "&:hover": {
      color: "#eee",
      transform: "scale(0.9)",
    },
  },
  ig: {
    color: "grey",
    "&:hover": {
      color: "#e91e63",
      transform: "scale(0.9)",
    },
  },
  linkedIn: {
    color: "grey",
    "&:hover": {
      color: "#0077b5",
      transform: "scale(0.9)",
    },
  },
  mail: {
    color: "grey",
    "&:hover": {
      color: "#FBBC05",
      transform: "scale(0.9)",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className={classes.github}
          href="https://github.com/tanaynaik2001"
          target="_blank"
        >
          <GitHubIcon
            style={{
              marginRight: "1%",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </Button>
        <Button
          className={classes.ig}
          href="https://www.instagram.com/_tanay_naik/"
          target="_blank"
        >
          <InstagramIcon
            style={{
              marginRight: "1%",
              fontSize: 35,
              cursor: "pointer",
            }}
          />
        </Button>
        <Button
          className={classes.linkedIn}
          href="https://www.linkedin.com/in/tanay-naik-9693831a4/"
          target="_blank"
        >
          <LinkedInIcon
            style={{ marginRight: "1%", fontSize: 35, cursor: "pointer" }}
          />
        </Button>
        <Button
          className={classes.mail}
          href="mailto:tanayn945@gmail.com"
          target="_blank"
        >
          <MailOutlineIcon
            style={{ marginRight: "1%", fontSize: 35, cursor: "pointer" }}
          />
        </Button>
      </div>
      <hr
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          opacity: 0.3,
        }}
      />
      <Fab
        style={{ marginLeft: "48%", color: "grey" }}
        size="small"
        aria-label="scroll back to top"
      >
        <Link to="navbar" smooth={true} duration={1000}>
          <KeyboardArrowUpIcon />
        </Link>
      </Fab>
      <StyledText>
        <p>Tanay Naik. &copy;{new Date().getFullYear()}</p>
      </StyledText>
    </div>
  );
};

export default Footer;

const StyledText = styled.p`
  color: #eee;
  margin: 20px auto;
  padding: 0 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
`;
