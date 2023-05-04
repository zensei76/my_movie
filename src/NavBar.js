import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position='static'>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
}
