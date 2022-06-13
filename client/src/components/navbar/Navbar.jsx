import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { loading, error, dispatch, user } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    console.log(user.username)
    console.log('ks')
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h2 className="logo">SahraBooking</h2>
        </Link>
        {user ? (<div className="loginlogout">
          <button className="btn-hover color" style={{margin:"0px 8px 0px 0px"}}>{user.username}</button>
          <div style={{marginLeft:"8x"}}><FontAwesomeIcon icon={faSignOut} className="signout" onClick={handleClick}/></div>
        </div>) : (
          <div className="navItems">
            <Link to="/register">
            <button class="btn-hover color">REGISTER</button>
            </Link>
            <Link to="/login">
            <button class="btn-hover color">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
