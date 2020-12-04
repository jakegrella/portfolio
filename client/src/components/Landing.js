import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<div className='landing'>
			<div className='landing-child'>
				<Link to='/webdev'>web development</Link>
			</div>
			<div className='landing-child'>
				<Link to='/photo'>photo</Link>
			</div>
		</div>
	);
}
