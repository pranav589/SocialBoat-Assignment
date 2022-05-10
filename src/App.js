import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import AllVideoCards from "./components/AllVideoCards/AllVideoCards";

function App() {
  const [videos, setVideos] = useState([]);
  return (
    <div className="App">
      <Header setVideos={setVideos} />
      <AllVideoCards videos={videos} />
    </div>
  );
}

export default App;
