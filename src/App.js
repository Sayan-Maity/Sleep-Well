import "./App.css";
import Home from "./components/Home";
import VideosMain from "./components/Videos/VideosMain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LightModeProvider from "./contexts/LightModeProvider";

function App() {
  return (
    <div>
      <LightModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sound" element={<VideosMain />} />
          </Routes>
        </Router>
      </LightModeProvider>
    </div>
  );
}

export default App;
