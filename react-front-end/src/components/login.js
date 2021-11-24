import React from "react";
import { Avatar, Grid, Paper, TextField, Typography, Link } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import Button from "@mui/material/Button";

const Login = () => {

  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 400,
    margin: '200px auto'
  }

  const avatarStyle = {
    backgroundColor: '#3F72AF'
  }

  const buttonStyle = {
    margin: '15px 0'
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="email" placeholder="email" fullWidth required/>
        <TextField label="password" placeholder="password" type="password" fullWidth required/>
        <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />
      <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth>Sign In</Button>
      <br></br>
      <br></br>
      <Typography> Forgot your {' '}
        <Link href="#">
          password?
        </Link>
      </Typography>
      <Typography> Don't have an account? {' '}
        <Link href="#">
          Register
        </Link>
      </Typography>
      <Typography> Sign in as a {' '}
        <Link href="#">
          Demo User
        </Link>
      </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;