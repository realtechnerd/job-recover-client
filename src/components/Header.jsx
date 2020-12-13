import {useState} from "react";
import logo from "../img/logo.png";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import TuneIcon from '@material-ui/icons/Tune';
import {useHistory} from 'react-router-dom'
import { Dropdown } from "react-bootstrap";
import CheckIcon from '@material-ui/icons/Check';
import {Row,Col} from 'react-bootstrap'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';

function Header() {
	const history = useHistory()
	const [input, setInput] = useState({
		location:"",
		title:""
	})
	
	
	const handleChange = e =>{
		setInput(prev=>({
			...prev,
			[e.target.name]: e.target.value
		}))
		
	}
	
	const handleSubmit = (e) => {
		
		if (input.location.length !== 0 || input.title.length !== 0)  {
			history.push(`search?location=${input.location}&title=${input.title}`);
		} else {
			e.preventDefault();
		}
	}

	return (
		<div className="header">
			<form onSubmit={handleSubmit}  className="header__searchbar row">
				<Link to="/">
					<img
						src={logo}
						alt="JobRecover Logo"
						className="header__logo"
					/>
				</Link>
				<div className='search col'>
					<SearchIcon className='search-icon' />
					{/* <input type="text" name="title" className="search_input" value={input.title} onChange={handleChange} placeholder="Dream job title..." /> */}
					<TextField fullWidth={true} className="text-input" placeholder="Dream job..." name="title" value={input.title} onChange={handleChange} />
				</div>
				<div className='search col'>
					<LocationOnIcon className='search-icon' />
					{/* <input type="text" name="location" className="search_input" value={input.location} onChange={handleChange} placeholder="Where do you want to work?" /> */}
					<TextField fullWidth={true} name="location" value={input.location} onChange={handleChange} className="text-input" placeholder="Where do you want to work?" />
				</div>
				<button type="submit" className="submit-btn">
					{/* <SearchIcon /> */}
					Search
				</button>
			</form>
		</div>
	);
}

export default Header;
