import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
