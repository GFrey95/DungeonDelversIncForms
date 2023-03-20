import { Box, Button } from "@mui/material";
import { PersonAdd, Edit, PostAdd } from "@mui/icons-material";
import { Title } from "../partials";
import { style } from "../style";

export const Home = () => {
  return (
    <Box
      sx={{
        fontFamily: "Dungeon",
      }}
    >
      <Title>
        <div
          style={{
            fontSize: "54px",
            marginRight: "2vh",
          }}
        >
          ⚔️
        </div>
        <div
          style={{
            fontSize: "70px",
          }}
        >
          Welcome to the DDI Intranet
        </div>
      </Title>
      <FormsSubTitle />
      <Buttons />
    </Box>
  );
};

const FormsSubTitle = () => (
  <Box
    sx={{
      paddingTop: "5vh",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "65px",
      }}
    >
      Forms
    </div>
  </Box>
);

const Buttons = () => (
  <Box
    sx={{
      margin: "8vh 20% 0 20%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        style={{
          marginRight: "1vh",
        }}
      >
        <FormButton
          text="New Character"
          route="/new-character"
          Icon={PersonAdd}
        />
      </Box>
      <Box
        style={{
          marginRight: "1vh",
        }}
      >
        <FormButton text="Edit Character" route="/edit-character" Icon={Edit} />
      </Box>
      <Box
        style={{
          marginRight: "1vh",
        }}
      >
        <FormButton
          text="Adventure Report"
          route="/adventure-report"
          Icon={PostAdd}
        />
      </Box>
    </Box>
  </Box>
);

// const side = "180px";

const FormButton = ({
  text,
  route,
  Icon,
}: {
  text: string;
  route: string;
  Icon: any;
}) => (
  <Button
    variant="outlined"
    sx={{
      backgroundColor: style.colors.yellow,
      borderColor: style.colors.black,
      height: "250px",
      width: "250px",
    }}
  >
    <div
      style={{
        color: style.colors.black,
      }}
    >
      <div
        style={{
          fontSize: "30px",
        }}
      >
        <Icon
          sx={{
            fontSize: "55px",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "20px",
        }}
      >
        {text}
      </div>
    </div>
  </Button>
);
