import { Card, CardContent, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { Sharable } from "../../core/models";
import { deleteNews } from "../../store/news/newsSlice";
import store from "../../store/store";

const NewsPost = ({ title, body, id }: Sharable.NewsEntity) => {
  const handleRemoveNewsItem = () => {
    store.dispatch(deleteNews(+id));
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: 190, sm: 220, md: 240 },
        maxHeight: "290px",
        position: "relative",
      }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {body}
        </Typography>
      </CardContent>
      <IconButton
        onClick={handleRemoveNewsItem}
        size="small"
        sx={{
          width: "10px",
          position: "absolute",
          top: "5px",
          right: "20px",
        }}>
        <CancelIcon />
      </IconButton>
    </Card>
  );
};

export default NewsPost;
