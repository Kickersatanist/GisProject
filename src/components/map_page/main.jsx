import React, { useState } from 'react'
import './main.css'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import ikit from '../../img/ikit.svg'
import { Link } from 'react-router-dom'
import styles from './main.module.css'
import clsx from 'clsx'

const MAPTILER_ACCESS_TOKEN = 'RF9cHiswjIGfoqsh5AQs'
const MAP_ID = 'streets-v2'

function mapTiler(x, y, z, dpr) {
	return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
		dpr >= 2 ? '@2x' : ''
	}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

const MapMain = () => {
	const marker_color = '#383267'

	const [isActive, setActive] = useState(false)

	const toggleClass = () => {
		setActive(!isActive)
	}

	return (
		<div className={clsx(styles.lightPurple)}>
			<div className='container'>
				<div className='map_main'>
					<h1 className='title-h1'>Карта посещенных ресторанов</h1>
					<Map
						provider={mapTiler}
						dprs={[1, 2]}
						height={700}
						defaultCenter={[56.009137, 92.872533]}
						defaultZoom={12.5}
					>
						<ZoomControl
							buttonStyle={{ background: marker_color, color: 'white' }}
						/>
						<Marker
							width={50}
							color={marker_color}
							anchor={[55.994447, 92.797601]}
							hover={true}
							onClick={toggleClass}
						/>
						<Overlay
							className={`marker_overlay ${isActive ? 'overlay-active' : ''}`}
							anchor={[55.994447, 92.797601]}
							offset={[0, 0]}
							name='overlay_1'
						>
							<div className='overlay__main'>
								<div className='overlay__container'>
									<h2 className='overlay_title'>
										Крутой институт ыыыыыыыыыsssssssssss
										sssssssssssssdasdasdasdasdasdasdasdas
									</h2>
									<img className='overlay_img' src={ikit} alt='' />
									<p className='overlay_mark'>Оценка: 9/10</p>
									<Link to='/restaurant/1' className='overlay_button'>
										Посмотреть
										{/* <button className='overlay_button'>Посмотреть</button> */}
									</Link>
								</div>
							</div>
						</Overlay>
					</Map>
				</div>
			</div>
		</div>
	)
}

export default MapMain
