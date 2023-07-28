import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg"
			style={{ background: '#f0f0f0', marginBottom: '1rem' }}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					My App
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								to="/"
								className="nav-link"
								//Oder
								// className={({ isActive }) =>
								// 	isActive ? 'active nav-link' : 'nav-link'
								// }
							>
								Home
							</NavLink>
							{/* <a className="nav-link active" href="#">
								Home
							</a> */}
						</li>
						<li className="nav-item">
							<NavLink to="/users" className="nav-link">
								Users
							</NavLink>
							{/* <a className="nav-link" href="#">
								Users
							</a> */}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
