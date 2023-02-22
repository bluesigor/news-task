import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProfilePage = () => {
  const { t } = useTranslation();
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <Container
      sx={{
        minHeight: "73vh",
        p: 10,
      }}>
      <Typography>
        {t("welcome")} {username}
      </Typography>
    </Container>
  );
};

export default ProfilePage;
