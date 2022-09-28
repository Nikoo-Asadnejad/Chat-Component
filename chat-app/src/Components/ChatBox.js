import "../App.css";
import { MarkChatUnread, Send } from "@mui/icons-material";
import { useState } from "react";
import { Fab, TextField, Box, Fade, Grid, Avatar } from "@mui/material";
import { Button, Container } from "react-bootstrap";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IconButton from "@mui/material/IconButton";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
//import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';

const MessageInput = styled(InputBase)(() => ({
  "label + &": {
    marginTop: "2px",
  },
  "& .MuiInputBase-input": {
    borderRadius: "17px",
    position: "absoloute",
    backgroundColor: "white",
    fontSize: 16,
    width: "100%",

    padding: "10px",
    "&:hover": {
      boxShadow: "0 0 4px grey",
      scale: "1.01",
      transitionDuration: "0.3s",
    },
    "&:focus": {
      width: "100%",
      boxShadow: "0 0 5px darkgray",
      opacity: [0.6, 0.6, 0.6],
    },
  },
}));

const connect = () => {
  var connection = new HubConnectionBuilder()
    .withUrl("http://localhost/5000/chat")
    .configureLogging(LogLevel.information)
    .build();

  connection.on("RecieveMessage", (user, message) => {
    console.Log(message);
  });

  connection.Start();
  connection.invoke("GetMessages");
};

const ChatBox = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const onClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Container>
      <Fab
        onClick={onClick}
        color="secondary"
        aria-label="edit"
        sx={{ position: "fixed", right: "25px", bottom: "25px" }}
      >
        <MarkChatUnread />
      </Fab>

      <Box
        id="chatBox"
        sx={{
          width: isOpen ?  "40%": "0px" ,
          height: isOpen ? "80%"  : "0px",
          position: "fixed",
          right: "70px",
          bottom: "60px",
          borderRadius: "27px",
          backgroundColor: "secondary.main",
          boxShadow: "0 0 15px darkgrey",
          padding: "2px",
          opacity:isOpen ? "0.7" : "0",
          transitionDuration :isOpen ? '0.8s' : '0.5s',
          "&:hover": {
            opacity: "0.8",
            scale: "1.003",
            transitionDuration: "0.6s",
          },
        }}
      >
        <Box
          sx={{
            width: "97.5%",
            height: "87%",
            margin: "4px",
            position: "absoloute",
            borderRadius: "25px",
            backgroundColor: "white",
            padding: "3px",
            opacity: "0.9",
          }}
        >
          <Grid md={6} sx={{ margin: "5px" }}>
            <Avatar
              sx={{
                display: "flex",
                float: "left",
                margin: "5px",
                marginRight: "10px",
                backgroundColor: "Deeppink",
              }}
            >
              A
            </Avatar>
            <h3 style={{ margin: "10px", marginTop: "10px" }}>Admin</h3>
            <p
              style={{
                marginTop: "-10px",
                fontSize: "small",
              }}
            >
              I'm here to answer to your questions.
            </p>
          </Grid>
        </Box>

        <MessageInput
          sx={{
            position: "absoloute",
            width: "98%",
            bottom: "2px",
            margin: "4px",
            padding: "3px",
            height: "10%",
          }}
          onChange={(e) =>{ setMessage(e.target.value)}}
        ></MessageInput>
        <IconButton
          aria-label="sendRoundedIcon"
          color="secondary"
          disabled={!message}
          sx={{
            zIndex: "1000",
            position: "absolute",
            right: "12px",
            bottom: "10px",
            opacity: "1 !important",
            "&:hover": {
              scale: "1.004",
              transitionDuration: "0.4s",
            },
          }}
          onClick={(e) => e.preventDefault()}
        >
          <SendRoundedIcon
            fontSize="large"
            sx={{
              opacity: "1 !important",
              color: "secondary",
              "&:hover": {
                scale: "1.004",
                transitionDuration: "0.4s",
              },
            }}
          />
        </IconButton>
      </Box>
    </Container>
  );
};
export default ChatBox;
