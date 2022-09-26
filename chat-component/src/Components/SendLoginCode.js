import { useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";
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
        <Box
          component="form"
          onSubmit={sendCode}
          noValidate
          sx={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        >
          <Grid align="center">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>

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
            color="secondary"
            onChange={(e) => setPhone(e.target.value)}
          />

          <Button
            variant="contained"
            color='secondary'
            type="submit"
            disabled={!phoneNumber}
            sx={{ marginTop: 2, marginBottom: 2, display: "flex" }}
          >
            SendCode
          </Button>

          <Grid container>
            <Grid item xs>
          
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" sx ={{color : 'secondary.main'}}>
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
