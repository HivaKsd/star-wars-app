import React from "react";
import Gallery from "./components/gallery/Gallery";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(img/raphael-nogueira-svbDI1Pq30s-unsplash.jpg)`,
      }}
    >
      <Gallery />
    </div>
  );
}

export default App;
