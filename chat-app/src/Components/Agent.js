import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Container } from "react-bootstrap";
import Grid from '@mui/material/Grid';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={2}>
        <Grid item md={4}>
        
            <Box
              sx={{
                display: "flex",
                float: "left",
                width: "20%",
                height: "100%",
                backgroundColor: "primary.main",
              }}
              // role="presentation"
              // onClick={toggleDrawer("left", false)}
              // onKeyDown={toggleDrawer("left", false)}
            >
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        <Divider />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
        
        </Grid>

        <Grid item md={8}>
          
            <Box
              sx={{
                display: "flex",
                border: "solid 1px secondary",
                backgroundColor: "secondary.main",
              }}
            >
              <div>messages</div>
            </Box>
        
        </Grid>
      </Grid>
    </Container>
  );
}
