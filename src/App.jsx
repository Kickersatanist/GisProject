import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import About from './pages/about_page'
import Map from './pages/map_page'
import RestList from './pages/rest_list_page'
import Footer from './components/footer/footer'
import Restaurant from './pages/restaurant_page'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/map' element={<Map />} />
				<Route path='/rest_list' element={<RestList />} />
				<Route path='/restaurant/:restaurantId' element={<Restaurant />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
