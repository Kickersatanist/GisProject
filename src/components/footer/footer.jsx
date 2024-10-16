import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './footer.css'
import logo from '../../img/лого.svg'
import home from '../../img/logo_home.svg'
import map from '../../img/logo_map.svg'
import restaurant from '../../img/logo_restaurant.svg'

const Footer = () => {
	const location = useLocation()
	return (
		<footer>
			<div className='container'>
				<div className='footer'>
					<a href='https://t.me/fooodgasm'>Телеграмм канал о еде</a>
					<a href='https://t.me/+gMtfZS2szqtlOTNi'>Телеграмм канал о жизни</a>
					<a href='https://t.me/GODeshkaa'>Мой телеграмм</a>
					<p>@2024 Foodgasm</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
