import Box from "@mui/material/Box";
import Card from "./FeedCard";

export const Feed = () => {
  return (
    <Box
      sx={{
        flex: 3,
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "1rem 0rem",
        paddingTop: "5rem",
      }}
    >
      <Card />
      <Card />

      <Card />

      <Card />

      <Card />

      <Card />
    </Box>
  );
};
