import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({GenerateToken}) =>
{
    const [optCode, setCode] = useState();

    
    return    <Container component="main" maxWidth="xs">
    <Form
      className="GenerateToken"
      onSubmit={e => {
        e.preventDefault();
        GenerateToken(OptCode);
      }} 
    >
      <Box component="form" 
           onSubmit={GenerateToken} 
           noValidate 
           sx={{ marginTop: 20  , display: 'flex' , flexDirection:'column' }}>
        <TextField
          margin="normal"
          required
          placeholder="Code"
          fullWidth
          id="code"
          label="Code"
          name="Code"
          autoComplete="Code"
          autoFocus
          onChange={(e) => setCode(e.target.value)}
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
          Login
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
             Change PhoneNumber
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
}