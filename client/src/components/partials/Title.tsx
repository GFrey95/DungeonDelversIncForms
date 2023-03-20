import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const Title = (props: PropsWithChildren) => (
  <Box
    sx={{
      paddingLeft: "3vh",
      paddingTop: "1vh",
      display: "flex",
    }}
  >
    {props.children}
  </Box>
);
