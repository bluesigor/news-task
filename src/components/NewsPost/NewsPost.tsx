import { Card, CardContent, Typography } from "@mui/material";
import { Sharable } from "../../core/models";

const NewsPost = ({ title, body }: Sharable.NewsEntity) => {
  return (
    <Card sx={{ maxWidth: { xs: 190, sm: 220, md: 240 }, maxHeight: "290px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 22 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsPost;
