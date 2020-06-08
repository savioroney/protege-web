import React from "react";
import StarRating from "../../components/starrating/StarRating";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h3" align="center">
        React MyApp
      </Typography>
      <Grid container direction="column" justify="center" alignItems="center">
        <div style={{ marginTop: "20px" }}>
          <StarRating totalStars={5} />
        </div>
      </Grid>
    </div>
  );
}
