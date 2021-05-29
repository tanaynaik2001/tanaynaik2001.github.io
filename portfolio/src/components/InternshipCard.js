import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { internships } from "../utils/internships";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    backgroundColor: "#1e1e30",
    width: "100%",
    marginTop: "10%",
  },
  div: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: "10%",
    marginRight: "10%",
  },
  media: {
    height: 200,
    opacity: 0.9,
  },
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

export default function InternshipCard() {
  const classes = useStyles();
  return (
    <div id="internships">
      <StyledH1 style={{ textAlign: "center", fontWeight: "200" }}>
        INTERNSHIPS
      </StyledH1>
      <div className={classes.div}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {Object.entries(internships[0]).map(([key, value], i) => (
            <>
              <Grid item xs={12} sm={12} md={6}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      // title="test"

                      image={value.image}
                    />

                    <CardContent>
                      <Typography
                        style={{ textAlign: "center", color: "#eee" }}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {value.position}
                      </Typography>
                      <hr />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="p"
                        style={{ color: "#eee" }}
                      >
                        {"\u2022"}Duration: {value.duration}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="p"
                        style={{ color: "#eee" }}
                      >
                        {"\u2022"}
                        {value.projects}
                      </Typography>
                      <div style={{ display: "flex", jc: "flex-start" }}>
                        {value.tech.map((elem) => (
                          <Typography
                            variant="h6"
                            color="textSecondary"
                            component="p"
                            style={{ color: "#eee" }}
                          >
                            {"\u2022"}
                            {elem}
                          </Typography>
                        ))}
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
}
