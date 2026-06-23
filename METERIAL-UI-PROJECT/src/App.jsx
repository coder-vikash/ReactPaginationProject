import Sidebar from "./componet/Sidebar";
import "./App.css";
import Navbar from "./componet/Navbar";
import { Feed } from "./componet/Feed";
import { Right } from "./componet/Right";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Right />
      </Stack>
    </>
  );
}

export default App;
