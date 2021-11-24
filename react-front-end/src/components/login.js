import React from "react";
import { Grid, Paper } from "@material-ui/core"

const Login = () => {

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 500,
    margin: '20px auto'
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        Sign In
      </Paper>
    </Grid>
  );
};

export default Login;