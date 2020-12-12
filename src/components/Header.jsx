import React from "react";
import logo from "../img/logo.png";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					src={logo}
					alt="JobRecover Logo"
					className="header__logo"
				/>
			</Link>
			<div className="header__searchbar">
				<input type="text" name="Search" className="search_input" />
				<button type="submit" className="submit_search">
					<SearchIcon />
				</button>
			</div>
		</div>
	);
}

export default Header;
