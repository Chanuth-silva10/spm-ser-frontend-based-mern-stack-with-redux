import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CategoryIcon from "@mui/icons-material/Category";
import logo from "../../Assets/logo.PNG";
import RedeemIcon from "@mui/icons-material/Redeem";
import RedditIcon from "@mui/icons-material/Reddit";

const Sidebar = () => {
  const button = () => {
    let items = document.querySelectorAll(".Dashboard__item");
  };

  return (
    <div className="sidebar">
      <Link to="/dashboard">
        <img src={logo} alt="Choco" />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p className="Dashboard__item">
          <PostAddIcon /> Products
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon />
          Users
        </p>
      </Link>
      <Link to="/admin/Promotions">
        <p>
          <RedeemIcon />
          Promotions
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <ReviewsIcon />
          Reviews
        </p>
      </Link>
      <Link to="/admin/Categories">
        <p>
          <CategoryIcon />
          Category
        </p>
      </Link>
      <Link to="/admin/Brands">
        <p>
          <RedditIcon />
          Brand
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
