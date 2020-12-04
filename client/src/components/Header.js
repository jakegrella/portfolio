import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className='header-content'>
				<h1>jakegrella</h1>
				<nav>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
				</nav>
			</div>
		</header>
	);
}
