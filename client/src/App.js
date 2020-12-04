import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Photo from './components/Photo';
import WebDev from './components/WebDev';
import About from './components/About';
import Landing from './components/Landing';

function App() {
	return (
		<>
			<Header />
			<div className='App'>
				<Route path='/photo'>
					<Photo />
				</Route>
				<Route path='/webdev'>
					<WebDev />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route exact path='/'>
					<Landing />
				</Route>
			</div>
		</>
	);
}

export default App;
