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
	
	const handleSubmit = () => {
		history.push(`search?location=${input.location}&title=${input.title}`)
	}

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
				<form onSubmit={handleSubmit}>
					<div className="row">

						<div className="col-sm">
							<div className='search'>
								<SearchIcon />
								{/* <input type="text" name="title" className="search_input" value={input.title} onChange={handleChange} placeholder="Dream job title..." /> */}
								<TextField className="text-input" placeholder="Dream job title..." name="title" value={input.title} onChange={handleChange} />
							</div>
							<div className='search'>
								<LocationOnIcon />
								{/* <input type="text" name="location" className="search_input" value={input.location} onChange={handleChange} placeholder="Where do you want to work?" /> */}
								<TextField name="location" value={input.location} onChange={handleChange} className="text-input" placeholder="Where do you want to work?" />
							</div>
						</div>
					</div>
					<button type="submit" className="submit_search d-inline">
						<SearchIcon />
					</button>
				</form>
			</div>
		</div>
	);
}

export default Header;
