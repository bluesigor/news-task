import { useTranslation } from "react-i18next";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Fallback = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Container sx={{ minHeight: "73vh", p: 10 }}>
      <Typography component={"h3"} variant='h6' color={"#555273"} >{t(`fallback`)}</Typography>
      <Box position={"relative"} >
        <Button sx={{
          position: "absolute",
          top: '20px',
          color: '#555273',
          borderColor: "#555273",
          "&:hover": {
            backgroundColor: "#65799b",
            borderColor: "#555273",
            color: 'white',
          }
        }}
          onClick={() => navigate('/')}
          variant="outlined"
        >
          <Typography variant="caption" component={"p"} >
            {t("back")}
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default Fallback;
