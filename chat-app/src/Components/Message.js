import { useState } from "react";
import * as React from "react";
import { Fab, TextField, Box, Fade ,Grid} from "@mui/material";

const Message = ({content}) => {
    return (
    <Container component="main" maxWidth="xs">
        <Box>
            <p>
                : {content}
            </p>
        </Box>
    </Container>
  );
};

export default Message;
