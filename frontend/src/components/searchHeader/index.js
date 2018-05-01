import React from "react";
import { NavBar, Icon } from "antd-mobile";
import { Link } from "react-router-dom";

import logo from "../../styles/images/slimlogo.png";
import "./styles";

const SearchHeader = () => (
    <div className="search-header-box">
        <div className="header-search-logo">
            <img src={ logo } alt=""/>
        </div>
        <div className="header-search-link">
            <Link 
                to="/search"
            >
                <i></i>
                <span>搜索商品</span>
            </Link>
        </div>
    </div>
);

export default SearchHeader;
