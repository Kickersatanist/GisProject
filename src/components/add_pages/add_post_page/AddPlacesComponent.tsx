import { Alert, Box, Button, Input, TextField } from '@mui/material'
// import { Grid } from '@mui/material/Grid2'
import { memo, useCallback, useState } from 'react'
import * as API from '@/shared/api/places'
import { CheckIcon } from 'lucide-react'
import { mapTiler, marker_color } from '@/shared/api/map_cfg/ConfigMap'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import './AddPlacesComponent.module.css'

interface IClickOptions {
	latitude: number
	longitude: number
}

export const AddPlacesComponent = memo(() => {
	const [isLoading, setIsLoading] = useState(false)
	const [post, setPost] = useState<API.TypeVisitedPlace>()
	const [openPopup, setOpenPopup] = useState(false)
	const [latLng, setLatLng] = useState<IClickOptions>()

	const addPost = useCallback(() => {
		setIsLoading(true)
		if (post) {
			API.addVisitedPlace(post)
				.then(response => {
					return <Alert severity='success'>Место добавлено.</Alert>
				})
				.catch(error => {
					return <Alert severity='error'>Ошибка: {error}.</Alert>
				})
				.finally(() => {
					setIsLoading(false)
				})
		}
		return (
			<Alert severity='error'>
				Не удалось получить данные о добавляемом посте.
			</Alert>
		)
	}, [])

	const handleOpenPopup = useCallback((e: any) => {
		setLatLng({ latitude: e.latLng[0], longitude: e.latLng[1] })
		console.log('Сработало')
		setOpenPopup(true)
	}, [])

	return (
		// <Grid>
		<div className='container'>
			<Map
				provider={mapTiler}
				dprs={[1, 2]}
				height={700}
				defaultCenter={[56.009137, 92.872533]}
				defaultZoom={12.5}
				onClick={handleOpenPopup}
			>
				<ZoomControl
					buttonStyle={{ background: marker_color, color: 'white' }}
				/>
				<Overlay
					className={`markerOverlay ${openPopup ? 'overlayActive' : ''}`}
					anchor={[latLng ? latLng.latitude : 0, latLng ? latLng.longitude : 0]}
					offset={[0, 0]}
				>
					<div className='overlayMain'>
						<div className='overlayContainer'>
							<TextField
								required
								className='overlayText'
								label='Название'
								sx={{ color: 'white' }}
							/>
							<TextField
								required
								className='overlayText'
								label='Описание'
								sx={{ color: 'white' }}
							/>
							{/* <h2>sss</h2> */}
							{/* <img className='overlayImg' alt='' />
							<p className='overlayMark'>Оценка: ssx/5</p> */}
							<Button onClick={addPost}>
								Добавить
								{/* <button className='overlay_button'>Посмотреть</button> */}
							</Button>
						</div>
					</div>
				</Overlay>
			</Map>
		</div>
	)
})
