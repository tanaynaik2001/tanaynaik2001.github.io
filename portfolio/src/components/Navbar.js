import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import resume from "../download/Tanay's Resume.pdf";
import { AppBar } from "@material-ui/core";
import gif from "../utils/images/TN.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#eee",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    color: "#eee",
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  btn1: {
    color: "#eee",
    "&:hover": {
      borderColor: "#00796b",
      backgroundColor: "#00796b",
      color: "#eee",
      transform: "scale(0.97)",
    },
    borderColor: "#eee",
    borderRadius: 10,
    marginLeft: 20,
  },
  btn2: {
    color: "#eee",
    marginLeft: 20,
    "&:hover": {
      borderColor: "#00796b",
      backgroundColor: "#00796b",
      color: "#eee",
      transform: "scale(0.97)",
    },
    borderRadius: 10,
    borderColor: "#eee",
  },
  iconBtn: {
    "&:hover": {
      backgroundColor: "#00796b",
      color: "#eee",
    },
    color: "#eee",
  },
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root} id="navbar">
      <Toolbar style={{ backgroundColor: "#1e1e30" }}>
        {/* <Typography variant="h5" className={classes.title}>
          Tanay Naik
        </Typography> */}
        <img src={gif} width="100" />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <div style={{ backgroundColor: "#1e1e30" }}>
                <MenuItem className={classes.iconBtn}>
                  <Link to="hackathons" smooth={true} duration={1000}>
                    Hackathons
                  </Link>
                </MenuItem>
                <MenuItem className={classes.iconBtn}>
                  <Link to="internships" smooth={true} duration={1000}>
                    Internships
                  </Link>
                </MenuItem>
              </div>
            </Menu>
          </>
        ) : (
          <div className={classes.headerOptions}>
            <Button
              href={resume}
              variant="outlined"
              className={classes.btn2}
              download="Tanay's Resume"
            >
              Resume
            </Button>
            <Button className={classes.btn1} variant="outlined">
              <Link
                to="hackathons"
                smooth={true}
                duration={1000}
                // onClick={() => history.push("/hackathons")}
              >
                Hackathons
              </Link>
            </Button>
            <Button className={classes.btn2} variant="outlined">
              <Link to="internships" smooth={true} duration={1000}>
                Internships
              </Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
