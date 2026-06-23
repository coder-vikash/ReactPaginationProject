import Grid from "@mui/material/Grid";
import FeedCard from "./FeedCard";

export const Feed = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2, flex: 4 }}>
      {[1, 2, 3, 4].map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item}>
          <FeedCard />
        </Grid>
      ))}
    </Grid>
  );
};
