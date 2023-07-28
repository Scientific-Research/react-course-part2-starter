import { Link } from 'react-router-dom';

const UserListPage = () => {
	const users = [
		{ id: 1, name: 'Mosh' },
		{ id: 2, name: 'John' },
		{ id: 3, name: 'Alice' },
	];
	return (
		<ul className="list-group">
			{users.map((user) => (
				<li className="list-group-item" key={user.id}>
					<Link to={`/users/${user.id}`}>{user.name}</Link>
					{/* <Link
						to={`/users/${user.id}`}
					>{`${user.name}  User ${user.id}`}</Link> */}

					{/* <a href="#">{user.name}</a> */}
					{/* <p>{`User ${user.id}`}</p> */}
				</li>
			))}
		</ul>
	);
};

export default UserListPage;
