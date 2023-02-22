import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleChangeUK = () => {
    i18n.changeLanguage("uk");
    localStorage.setItem("lng", "uk");
  };

  const handleChangeEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("lng", "en");
  };

  const handleSwitcher = () => {
    i18n.language === "uk" ? handleChangeEN() : handleChangeUK();
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, ml: 5, minWidth: 120 }}>
      <InputLabel sx={{
        color: 'white'
      }} id="demo-simple-select-standard-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={i18n.language}
        onChange={handleSwitcher}
        label="Age"
        sx={{
          color: 'white',
          borderColor: 'white'
        }}
      >
        <MenuItem value='en'>Eng</MenuItem>
        <MenuItem value="uk">Uk</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
