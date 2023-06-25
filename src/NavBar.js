import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";

export function NavBar({ mode, setMode }) {
  const navigate = useNavigate();
  return (

    <AppBar position='static'>
      <Toolbar>
      <Box sx={{ flexGrow: 1 }}>

        <IconButton aria-label='Home' onClick={() => navigate("/")}>
          <HomeIcon />
        </IconButton>

        <Button color='inherit' onClick={() => navigate("/movie")}>
          Movies
        </Button>
        <Button color='inherit' onClick={() => navigate("/movie/add")}>
          Add Movie
        </Button>
        <Button color='inherit' onClick={() => navigate("/color-game")}>
          Color Game
        </Button>
        <Button color='inherit' onClick={() => navigate("/tic-tac-toe")}>
          Tic-Tac-Toe
        </Button>
      </Box>

          <IconButton
            sx={{ ml: 1 }}
            color='inherit'
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

      </Toolbar>
    </AppBar>
 
  );
}
