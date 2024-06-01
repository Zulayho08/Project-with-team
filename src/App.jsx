import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Journal from "./Pages/Journal/Journal";
import Electron from "./Pages/Electron/Electron";
import Media from "./Pages/Media/Media";
import Books from "./Pages/Books/Books";
import Page from "./Pages/page/page";
import Pagee from "./Pages/page2/page2";
import Choice from "./Pages/Choice/Choice";
import Device from "./Pages/Device/Device";
import Profile from "./Pages/Profile/Profile";
import Card from "./Pages/Card/Card";
import Follow from "./Pages/Follow/Follow";
import My_Card from "./Pages/My_Card/My_Card";
import Modal6 from "./Components/Modal6/Modal6";
import Inner from "./Components/InnerList/Inner";
import Main from "./Components/Main/Main";
import Feature from "./Pages/Feature/Feature";
import Feature2 from "./Pages/Feature2/Feature";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/electron" element={<Electron />} />
        <Route path="/media" element={<Media />} />
        <Route path="/books" element={<Books />} />
        <Route path="/news" element={<Page />} />
        <Route path="/news2" element={<Pagee />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/device" element={<Device />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/card" element={<Card />} />
        <Route path="/profile/follow" element={<Follow />} />
        <Route path="/profile/mycard" element={<My_Card />} />
        <Route path="/profile/modal" element={<Modal6 />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/feature2" element={<Feature2 />} />
      </Routes>
    </>
  );
}

export default App;
