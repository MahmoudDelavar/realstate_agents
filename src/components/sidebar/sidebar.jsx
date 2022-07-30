import { Link } from "react-router-dom";
import {
  FiUsers,
  FiSearch,
  FiUserCheck,
  FiFileText,
  FiStar,
  FiBookmark,
  FiBook,
} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

import "./style.css";
//====================================================
const Sidebar = () => {
  return (
    <>
      <div className="container  ">
        <div className="row sidebar">
          <div className="content"></div>
          <div className="row logo">
            <img src={require("./../../media/logo.png")} alt="" />
          </div>
          <div className="title mt-2">
            <h3 className="text-center">املاک هاشمی نسب</h3>
            <hr />
          </div>
          <div className="star">
            <FiStar className="" />
            <FiStar className="" />
            <AiFillStar className="" />
            <AiFillStar className="" />
            <AiFillStar className="" />
          </div>
          <div className="row ">
            <div className=" col sidebar ">
              <ul className="s-ul">
                <li className="s-li ">
                  <Link className="s-link " to="/search">
                    <span className="s-icon">
                      <FiSearch />
                    </span>
                    <span className="s-text">جستجو</span>
                  </Link>
                </li>
                <li className="s-li">
                  <Link className="s-link" to="/myAds">
                    <span className="s-icon">
                      <FiFileText />
                    </span>
                    <span className="s-text">آگهی های من</span>
                  </Link>
                </li>
                <li className="s-li">
                  <Link className="s-link" to="/agents">
                    <span className="s-icon">
                      <FiUserCheck />
                    </span>
                    <span className="s-text">نمایده ها</span>
                  </Link>
                </li>
                <li className="s-li">
                  <Link className="s-link" to="/profile">
                    <span className="s-icon">
                      <FiUsers />
                    </span>
                    <span className="s-text">پروفایل</span>
                  </Link>
                </li>
                <li className="s-li">
                  <Link className="s-link" to="/bookmarked">
                    <span className="s-icon">
                      <FiBookmark />
                    </span>
                    <span className="s-text">ملک های ذخیره شده</span>
                  </Link>
                </li>
                <li className="s-li">
                  <Link className="s-link" to="/lastSearch">
                    <span className="s-icon">
                      <FiBook />
                    </span>
                    <span className="s-text">جستجوهای اخیر</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
