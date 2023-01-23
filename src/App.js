import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Music } from "./pages/Music";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DiaryEntries } from "./pages/DiaryEntries";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/diaries" element={<DiaryEntries />} />
      </Route>
    </Routes>
  );
};

export default App;
