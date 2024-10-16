import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import logo from '../../img/лого.svg'
import home from '../../img/logo_home.svg'
import map from '../../img/logo_map.svg'
import restaurant from '../../img/logo_restaurant.svg'

const Header = () => {
	const location = useLocation()
	return (
		<header>
			<div className='container'>
				<div className='header'>
					<Link to='/' href='' className='header__logo'>
						<img src={logo} alt='Лого' />
						<h1>Foodgasm</h1>
					</Link>
					<div className='header__nav'>
						<nav className='nav'>
							<Link
								to='/'
								className={`nav__link ${
									location.pathname === '/' ? 'active' : ''
								}`}
							>
								<img src={home} alt='' />
								<p>Главная</p>
							</Link>
							<Link
								to='map'
								className={`nav__link ${
									location.pathname === '/map' ? 'active' : ''
								}`}
							>
								<img src={map} alt='' />
								<p>Карта</p>
							</Link>
							<Link
								to='rest_list'
								className={`nav__link ${
									location.pathname === '/restlist' ? 'active' : ''
								}`}
							>
								<img src={restaurant} alt='' />
								<p>Список ресторанов</p>
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
		// <header className='header'>
		// 	<div className='header_container'>
		// 		<div className='logo'>
		// 			<img src={logo} alt='' />
		// 			<h1>Foodgasm</h1>
		// 		</div>
		// 		<nav className='nav'>
		// 			<Link
		// 				to='/'
		// 				className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
		// 			>
		// 				<img src={home} alt='' />
		// 				<p>Главная</p>
		// 			</Link>
		// 			<Link
		// 				to='/map'
		// 				className={`nav-link ${
		// 					location.pathname === '/map' ? 'active' : ''
		// 				}`}
		// 			>
		// 				<img src={map} alt='' />
		// 				<p>Карта</p>
		// 			</Link>
		// 			<Link
		// 				to='/favorites'
		// 				className={`nav-link ${
		// 					location.pathname === '/favorites' ? 'active' : ''
		// 				}`}
		// 			>
		// 				<img src={restaurant} alt='' />
		// 				<p>Список ресторанов</p>
		// 			</Link>
		// 		</nav>
		// 	</div>
		// </header>
	)
}

export default Header
