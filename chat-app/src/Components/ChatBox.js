import "../App.css";
import { MarkChatUnread, Send } from "@mui/icons-material";
import { Fab, TextField, Box, Fade ,Grid} from "@mui/material";
import { Button, Container } from "react-bootstrap";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IconButton from "@mui/material/IconButton";

const CssTextField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
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
      boxShadow: "0 0 4px darkgray",
      opacity: [0.6, 0.6, 0.6],
    },
  },
}));

const onClick = () => {};
const ChatBox = () => {
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
        sx={{
          width: "550px",
          height: "600px",
          position: "fixed",
          right: "70px",
          bottom: "60px",
          borderRadius: "27px",
          backgroundColor: "secondary.main",
          boxShadow: "0 0 15px darkgrey",
          padding: "2px",

          opacity: "0.7",
          "&:hover": {
            opacity: "0.8",
            scale: "1.003",
            transitionDuration: "0.7s",
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
       <Grid>

       </Grid>

        </Box>

        <CssTextField
          sx={{ width: "98%", bottom: "0px", margin: "4px", padding: "3px" }}
        ></CssTextField>
        <IconButton
          aria-label="sendRoundedIcon"
          color="secondary"
          sx={{
            zIndex: "1000",
            position: "absolute",
            right: "12px",
            bottom: "13px",
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
