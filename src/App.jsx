import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
      </BrowserRouter>
      <Player />
    </>
  );
}

export default App;
