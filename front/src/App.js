import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';

function App() {
	return (
		<div className="main">
			<Router >
				<Header />
				<div className='flex-container'>
					<div className='container'>
						<Routes>
							<Route path='/*' element={<Main />} />
							<Route path='/about' element={<About />} />
							<Route path='/create' element={<Create />} />
							<Route path='/note' element={<Note />} />
							<Route path='/note/:noteURL/*' element={<Note />} />
							<Route element={Error404} />
						</Routes>
					</div>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;