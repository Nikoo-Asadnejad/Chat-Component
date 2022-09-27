import "../App.css";
import { MarkChatUnread, Send } from "@mui/icons-material";
import { Fab, TextField, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
   
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        position: "absolute",
        border: "1.5px solid grey",
        bottom: "3px",
        padding: '5px',
        width: "95%",
        borderRadius: "25px",
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

const ChatBox = () => {
  return (
    <Container>
      <Fab
        color="secondary"
        aria-label="edit"
        sx={{ position: "fixed", right: "25px", bottom: "25px" }}
      >
        <MarkChatUnread />
      </Fab>
      <Box
        sx={{
          width: "370px",
          height: "400px",
          position: "fixed",
          right: "70px",
          bottom: "60px",
          borderRadius: "27px",
          border: "2px solid lightgrey",
          backgroundColor: "lightgrey",
          boxShadow: "0 0 14px black",
          padding: "3px",
          opacity: [0.4, 0.4, 0.4],
          "&:hover": {
            opacity: [0.5, 0.2, 0.5],
          },
        }}
      >
        <Box
        sx={{
          width: "96%",
          height: "325px",
          margin : '5px',
          position: "absoloute",
          borderRadius: "17px",
          backgroundColor: "white",
          padding: "3px",
          opacity: [0.9, 0.9, 0.9]
         
        }}
      ></Box>
        <TextField  variant='standard' color="grey"
          sx={{
            position: "absolute",
            border: "1.5px solid grey",
            bottom: "3px",
            padding: '5px',
            width: "95%",
            borderRadius: "25px",
          }}
        >
          <Send />
        </TextField>
      </Box>
    </Container>
  );
};
export default ChatBox;
