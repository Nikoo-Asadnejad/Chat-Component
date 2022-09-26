import { useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "react-bootstrap";

const SignUp = ({ SignUp }) => {
  const [phoneNumber, setPhone] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  return (
    <Container component="main" maxWidth="xs">
      <Form
        className="SignUp"
        onSubmit={(e) => {
          e.preventDefault();
          SignUp(firstName, lastName, phoneNumber);
        }}
      >
        <Box
          component="form"
          onSubmit={SignUp}
          noValidate
          sx={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        >
          <Grid align="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>

          <TextField
            margin="normal"
            required
            placeholder="First Name"
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="FirstName"
            autoFocus
            color="secondary"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            placeholder="Last Name"
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            color="secondary"
            autoComplete="Last Name"
            autoFocus
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            placeholder="phoneNumber"
            fullWidth
            color="secondary"
            id="phone"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phone"
            autoFocus
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={!phoneNumber}
            sx={{ marginTop: 2, marginBottom: 2, display: "flex" }}
          >
            SendCode
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2"></Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx={{ color: "secondary" }}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Container>
  );
};

export default SignUp;
