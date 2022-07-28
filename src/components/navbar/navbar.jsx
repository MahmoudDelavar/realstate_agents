import { Link } from "react-router-dom";
import { FiUsers, FiSearch, FiUserCheck, FiFileText } from "react-icons/fi";
import "./style.css";
import { useEffect } from "react";

//====================================================
const TopNavbar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activLink));
  });
  return (
    <>
      <div className=" container-floid main d-lg-none">
        <div className="navbar">
          <ul className="">
            <li className="list active">
              <Link className="link" to="/search">
                <span className="icon">
                  <FiSearch />
                </span>
                <span className="text">جستجو</span>
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/myAds">
                <span className="icon">
                  <FiFileText />
                </span>
                <span className="text">آگهی های من</span>
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/agents">
                <span className="icon">
                  <FiUserCheck />
                </span>
                <span className="text">نمایده ها</span>
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/profile">
                <span className="icon">
                  <FiUsers />
                </span>
                <span className="text">پروفایل</span>
              </Link>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
