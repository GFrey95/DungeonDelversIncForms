import { Box } from "@mui/material"
import headerImg from '../../images/headerImg.jpg';

export const Header = () => {
  return <Box
    sx={{
      width: "100%",
      height: "200px",
      overflowY: "hidden"
    }}>
      <img src={headerImg} loading="lazy" width="100%" />
  </Box>

}