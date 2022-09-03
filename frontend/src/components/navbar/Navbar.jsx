import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <img
              src="https://th.bing.com/th/id/R.3bc2a1c618e54ed58a0b91bde0285758?rik=4EB9SONVBG7bog&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt="Profile"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
