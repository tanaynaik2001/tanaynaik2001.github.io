import "./App.css";
import Home from "./Pages/Home";

import Footer from "./components/Footer";
import InternshipCard from "./components/InternshipCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import YoutubeCard from "./components/YoutubeCard";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", height: "auto", backgroundColor: "#1e1e30" }}
    >
      <Navbar />
      <Home />
      <InternshipCard />
      <YoutubeCard />
      <div style={{ marginTop: 50 }}>
        <Footer />
      </div>
    </div>
    // <Drawer />
  );
}

export default App;
