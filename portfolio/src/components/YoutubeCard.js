import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { hackathon } from "../utils/hackathons";
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius:13,
    backgroundColor:"#1e1e30",
    
  },
  media: {
    height: 280,
  },
  div: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  btn: {
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "#00796b",
      color: "white",
      borderColor:"#00796b",
      transform: "scale(0.97)",
    },
    borderColor:"#eee"
  },
  text:{
    color:"#eee"
  }
}));

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

export default function YoutubeCard() {
  const classes = useStyles();

  return (
    <div className={classes.div} id="hackathons">
      <StyledH1 style={{textAlign:"center",fontWeight:"200"}}>HACKATHONS</StyledH1>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {Object.entries(hackathon[0]).map(([key, value], i) => (
          <>
            <Grid item xs={12} sm={12} md={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="iframe"
                    title="test"
                    src={value.embedded}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography className={classes.text} gutterBottom variant="h5" component="h4" >
                        {value.name}
                      </Typography>
                      <Typography className={classes.text} gutterBottom variant="h6" component="h4" style={{fontSize:18}}>
                        Number of members: {value.noOfMembers}
                      </Typography>
                      <Typography className={classes.text} gutterBottom variant="h6" component="h4" style={{color:"#00796b"}}>
                        Result: {value.result}
                        
                      </Typography>
                    </CardContent>
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography className={classes.text} gutterBottom variant="h5" component="h4">
                        {value.organizer}
                      </Typography>
                      <Typography className={classes.text} gutterBottom variant="h6" component="h4" style={{fontSize:18}}>
                        {value.time}
                      </Typography>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="default"
                        href={value.github}
                        target="_blank"
                        className={[classes.btn,classes.text]}
                        endIcon={<GitHubIcon />}
                      >
                        Github Repository
                      </Button>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}
