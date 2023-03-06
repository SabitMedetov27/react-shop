import React, { useEffect } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSidebarOff,
  getSidebarStatus,
} from "../../redux/slice/sidebarSlice";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../redux/slice/categorySlice";
function Sidebar() {
  const dispatch = useDispatch();
  const isSidebar = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside className={`sidebar ${isSidebar ? "hide-sidebar" : ""}`}>
      <button
        onClick={() => dispatch(setSidebarOff())}
        type="button"
        className="sidebar-hide-btn"
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="sidebar-cont">
        <div className="sidebar-title">All Categories</div>
        <ul className="sidebar-ul">
          {categories.map((category, idx) => {
            return (
              <li onClick={() => dispatch(setSidebarOff())} key={idx}>
                <Link  to={`category/${category}`} className="sidebar-link">
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
