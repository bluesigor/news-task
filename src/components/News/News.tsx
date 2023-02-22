import { Box, Button, Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../core/hooks/useStore";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { getNews } from "../../store/news/newsSlice";
import NewsPost from "../NewsPost";
import { useTranslation } from "react-i18next";

const News = () => {
  const [visible, setVisible] = useState(10);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const handleShowMore = () => {
    if (visible === 100) {
      setVisible(0);
    }

    setVisible((prev) => prev + 10);
  };

  if (loading) {
    <Typography variant="h6" component="h3">
      Loading...
    </Typography>;
  }

  if (error) {
    <Typography variant="h3" component="h3">
      Something went wrong...
    </Typography>;
  }

  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 12, md: 20, xl: 30 },
          height: "74vh",
          overflow: "scroll",
          py: 5,
          display: "flex",
          flexDirection: "row",
          gap: { xs: "5px", sm: "15px", md: "25px" },
          flexWrap: "wrap",
        }}>
        {data.length > 0 &&
          data
            .slice(0, visible)
            .map((post) => (
              <NewsPost
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                userId={post.userId}
              />
            ))}
      </Box>
      <Box display={"flex"} justifyContent="center" py={2}>
        <Button
          onClick={handleShowMore}
          sx={{
            color: "#555273",
            border: "1px solid #555273",
          }}
          variant="outlined">
          {visible === 100 ? t("less") : t("more")}
        </Button>
      </Box>
    </>
  );
};

export default News;
