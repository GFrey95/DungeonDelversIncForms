import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./partials";

import { router } from "../router";
import { style } from "./style";

function App() {
  return (
    <Box
      height="100vh"
      sx={{
        backgroundColor: style.colors.yellow_light,
      }}
    >
      <Header />
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
