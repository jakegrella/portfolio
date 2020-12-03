import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<div>
			<Link to='/webdev'>web development</Link>
			<Link to='/photo'>photo</Link>
		</div>
	);
}
