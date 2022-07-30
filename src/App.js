import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./components/search/search";
import Agents from "./components/agents/agents";
import MyAds from "./components/myAds/myAds";
import Profile from "./components/profile/profile";
import Lastsearch from "./components/lastSearch/lastSearch";
import Bookmarked from "./components/bookmarked/bookmarked";
import Sidebar from "./components/sidebar/sidebar";
//====================================================
const App = () => {
  return (
    <>
      <div className="container-floid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row align-items-center ">
          <div className="col col-lg-4 col-xl-3 col-xxl-3  d-none d-lg-block ">
            <Sidebar />
          </div>
          <div className="col col-lg-8  text-center bg-success ">
            <Routes>
              <Route exaxt path="/search" element={<Search />} />
              <Route exaxt path="/agents" element={<Agents />} />
              <Route exaxt path="/myAds" element={<MyAds />} />
              <Route exaxt path="/profile" element={<Profile />} />
              <Route exaxt path="/bookmarked" element={<Bookmarked />} />
              <Route exaxt path="/lastSearch" element={<Lastsearch />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
