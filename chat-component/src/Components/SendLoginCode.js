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

const SendLoginCode = ({ sendCode }) => {
  const [phoneNumber, setPhone] = useState();

  return (
    <Container component="main" maxWidth="xs">
      <Form
        className="SendCode"
        onSubmit={(e) => {
          e.preventDefault();
          sendCode(phoneNumber);
        }}
      >
        <Box component="form" 
             onSubmit={sendCode} 
             noValidate 
             sx={{ marginTop: 20  , display: 'flex' , flexDirection:'column' }}>
          <TextField
            margin="normal"
            required
            placeholder="phoneNumber"
            fullWidth
            id="phone"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phone"
            autoFocus
            onChange={(e) => setPhone(e.target.value)}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!phoneNumber}
            sx={{ marginTop: 2, marginBottom : 2 , display: "flex" }}
          >
            SendCode
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Form>
    </Container>
  );
};


export default SendLoginCode;
