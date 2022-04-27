import { NavLink } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
			<div className="container">
				<ul className="nav nav-pills ">
					<li className="nav-item ">
						<NavLink className="nav-link text-light" to="/*">Main</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-light" to="/about">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-light" to="/create">Create</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link text-light" to='/note'>Note</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;