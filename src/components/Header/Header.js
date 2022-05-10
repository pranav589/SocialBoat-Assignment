import { useEffect, useState } from "react";
import "./Header.css";
import {
  Avatar,
  Typography,
  IconButton,
  Box,
  Toolbar,
  AppBar,
} from "@mui/material";
import axios from "axios";

export default function Header({ setVideos }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    const res = await axios.get(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=10`
    );

    setVideos(res?.data?.results);
  };

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            SocialBoat
          </Typography>
          <div className="header__search">
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
          </div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                alt="Profile Image"
                src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
