import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
	const params = useParams();
	// console.log(params);
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(searchParams.toString());
	console.log(searchParams.get('name'));
	console.log(searchParams.get('age'));

	const location = useLocation();
	console.log(location);

	return <p>User</p>;
};

export default UserDetailPage;
