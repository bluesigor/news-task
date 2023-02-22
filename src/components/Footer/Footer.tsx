import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <AppBar
        sx={{
          px: { xs: 10, sm: 16, md: 22, xl: 35 },
          bottom: "0px",
          backgroundColor: "#555273",
          minHeight: "20vh",
        }}
        position="relative">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
            <Typography
              color={"white"}
              variant="subtitle2"
              textTransform={"capitalize"}
              sx={{ flexGrow: 1 }}>
              Daily News
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
