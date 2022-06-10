import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import SidebarData from './SidebarData';
import './Navbar.css';
import StorageManager from '../../helpers/format/StorageManager';
import { getUserData } from '../../helpers/format/userDataManager';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const user = useSelector((state) => state.userReducer.userDetails);
  console.log(getUserData());

  const showSidebar = () => setSidebar(!sidebar);
  const getClass = ({ isActive }) => (isActive ? 'active' : '');
  const navigate = useNavigate();
  const logout = () => {
    StorageManager.removeToken();
    navigate('/login');
  };

  return (
    <>
      {user
      && (
      <IconContext.Provider value={{ color: '#000' }}>
        <div className="navbar">
          {!sidebar && (
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="show-menu" />
          </div>
          ) }
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar} onKeyDown={showSidebar} role="presentation">
            <li className="navbar-toggle">
              <div className="menu-bars">
                <AiIcons.AiOutlineClose className="close=menu" />
              </div>
            </li>
            <li className="user-info">
              <img src={user.image_url} alt="user" className="image" />
              <p className="user-name">{user.name}</p>
            </li>
            {SidebarData(user.role).map((data) => (
              <li key={data.id} className={data.className}>
                <NavLink to={data.path} className={getClass}>
                  {data.icon}
                  <span>{data.title}</span>
                </NavLink>
              </li>
            ))}
            <div className="social-menu">
              <FaIcons.FaFacebook className="social-icons" />
              <FaIcons.FaTwitter className="social-icons" />
              <FaIcons.FaInstagram className="social-icons" />
              <FaIcons.FaGithubAlt className="social-icons" />
            </div>
            <button type="button" className="logout" onClick={logout}>Logout</button>
          </ul>
        </nav>
      </IconContext.Provider>
      )}
    </>
  );
}

export default Navbar;
