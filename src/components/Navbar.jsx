import React from "react";
import icon from "../images/cryptocurrency.png";
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';

const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="logo__container">
        <img src={icon} alt="icon" className="logo" />
        <Typography variant="h4" className="logo__text">
          <Link to="/">Cryptoverse</Link>
        </Typography>
      </div>
      <div className="menu__list">
      
        
        <MenuItem className="menu__item">
            <ContentCut fontSize="small" />
          <Link to="/">Home</Link>
        </MenuItem>

        <MenuItem className="menu__item">
            <ContentCut fontSize="small" />
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </MenuItem>


        <MenuItem className="menu__item">
            <ContentCut fontSize="small" />
          <Link to="/exchanges">Exchanges</Link>
        </MenuItem>

        <MenuItem className="menu__item">
            <ContentCut fontSize="small" />
          <Link to="/news">News</Link>
        </MenuItem>
        
      </div>
    </div>
  );
};

export default Navbar;
