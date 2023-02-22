import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";

import { setPassword, setUsername } from "../../store/user/userSlice";
import { RootState } from "../../store/store";
import { login } from "../../store/login/loginSlice";

import { credsPass, credsUsername } from "../../core/config/credentials";
import { Sharable } from "../../core/models";

const Login = () => {
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState<Sharable.Error>({
    errorText: "",
    isError: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password } = useSelector((state: RootState) => state.user);

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === credsUsername && password === credsPass) {
      navigate("/profile");
      dispatch(login());
    } else {
      setError((prev) => {
        return {
          ...prev,
          isError: true,
          errorText: t("loginErr"),
        };
      });
    }
  };

  const showHidePass = () => {
    setIsShown((prev) => !prev);
  };

  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };
  return (
    <Container
      sx={{
        flexGrow: 1,
        height: "74vh",
        position: "relative",
      }}>
      <Box
        sx={{
          position: "absolute",
          minWidth: "450px",
          minHeight: "30vh",
          border: "1px solid lightgrey",
          borderRadius: 1,
          boxShadow: " -10px 0 21px gray",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#e2eff1",
          p: 5,
          textAlign: "center",
        }}>
        <Typography component="h1" variant="h5">
          {t("signin")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={error.isError}
            margin="normal"
            required
            fullWidth
            value={username}
            label={t("username")}
            autoComplete="email"
            autoFocus
            onChange={handleUsername}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            error={error.isError}
            helperText={error.isError && error.errorText}
            label={t("pass")}
            type={isShown ? "text" : "password"}
            autoComplete="current-password"
            onChange={handlePass}
          />
          <IconButton
            sx={{
              position: "absolute",
              right: "50px",
              top: "205px",
              zIndex: 1,
            }}
            onClick={showHidePass}>
            {isShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, position: "relative" }}>
            {t("login")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
