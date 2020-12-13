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

function Header() {
	const history = useHistory()
	const [input, setInput] = useState('')
	
	const [choices, setChoices] = useState({
		choice1:false,
		choice2:false,
		choice3:false
	})

	// console.log(props.posts)
	
	const handleChange = e =>{
		setInput(e.target.value)
	}
	const handleChoices = e =>{
		setChoices(prev => ({
			...prev,
			[e.target.name]: !prev[e.target.name]
		}))
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
				<input type="text" name="Search" className="search_input" value={input} onChange={handleChange} placeholder="Dream job..." />
				<button type="submit" className="submit_search">
					<SearchIcon />
				</button>
			</div>
			<Dropdown>
					<Dropdown.Toggle className="settings-btn" id="dropdown-settings">
						<TuneIcon />	
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item name="choice1" value={choices.choice1}  onClick={handleChoices}>Job Title/Description {choices.choice1 && <CheckIcon />}</Dropdown.Item>
						<Dropdown.Item name="choice2" value={choices.choice2} onClick={handleChoices}>Company {choices.choice2 && <CheckIcon />}</Dropdown.Item>
						<Dropdown.Item name="choice3" value={choices.choice3} onClick={handleChoices}>Location {choices.choice3 && <CheckIcon />}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
		</div>
	);
}

export default Header;
