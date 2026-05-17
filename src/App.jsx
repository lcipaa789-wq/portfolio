import { Route, Router, Routes } from "react-router";
import Main from "./pages/Main";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
