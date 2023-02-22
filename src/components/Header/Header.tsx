import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher";

import news_logo from "../../assets/photos/news.png";
import { logout } from "../../store/login/loginSlice";
import { RootState } from "../../store/store";
import { setPassword, setUsername } from "../../store/user/userSlice";

const Header = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar sx={{ px: 4, backgroundColor: "#555273" }} position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
              to="/">
              <Box
                component={"img"}
                src={news_logo}
                sx={{
                  maxWidth: "35px",
                }}
              />
              <Typography
                color={"white"}
                variant="subtitle2"
                textTransform={"capitalize"}
                sx={{ flexGrow: 1 }}>
                {t("home")}
              </Typography>
            </Link>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="news">
              <Typography
                color={"white"}
                variant="subtitle2"
                textTransform={"capitalize"}
                sx={{ flexGrow: 1 }}>
                {t("news")}
              </Typography>
            </Link>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            {isLoggedIn ? (
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="/profile">
                {t("account")}
              </Link>
            ) : null}
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: 30,
              }}
              to="login"
              onClick={() => {
                dispatch(logout());
                dispatch(setUsername(""));
                dispatch(setPassword(""));
              }}>
              {isLoggedIn ? t("logout") : t("login")}
            </Link>

            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
