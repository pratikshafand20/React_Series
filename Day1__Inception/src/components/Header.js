import { LOGO_URL } from "../utils/constant.js";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
