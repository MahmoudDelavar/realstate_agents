import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/search/search";
import Agents from "./components/agents/agents";
import MyAds from "./components/myAds/myAds";
import Profile from "./components/profile/profile";

//====================================================
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exaxt path="/search" element={<Search />} />
        <Route exaxt path="/agents" element={<Agents />} />
        <Route exaxt path="/myAds" element={<MyAds />} />
        <Route exaxt path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
