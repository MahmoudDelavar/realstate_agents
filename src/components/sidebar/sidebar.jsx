import { Link } from "react-router-dom";

//====================================================
const Sidebar = () => {
  return (
    <>
      <d className="container">
        <div className="row">
          <div className="col-6  sidebar d-flex">
            <ul class="nav flex-column d-none d-lg-block">
              <li class="nav-item">
                <Link className="nav-link" to="/search">
                  جسنجو
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/myAds">
                  آگهی های من
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/agents">
                  نماینده ها
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/profile">
                  پروفایل
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/bookmarked">
                  ملک های ذخیره شده
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/lastsearch">
                  جستجوهای اخیر
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </d>
    </>
  );
};

export default Sidebar;
