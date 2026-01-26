import Navbar from "./components/navbar";

import UXUIProjects from "./pages/projects";
import Experience from "./pages/experience";
import ArtCorner from "./pages/artcorner";
import AboutMe from "./pages/about";
import AnimatedHeader from "./components/header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AnimatedHeader />} />
        <Route path="/uxui-projects" element={<UXUIProjects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/art-corner" element={<ArtCorner />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
