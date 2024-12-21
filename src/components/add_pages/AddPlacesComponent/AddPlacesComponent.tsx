import { Alert, Box, Button, Input, TextField } from '@mui/material'
// import { Grid } from '@mui/material/Grid2'
import { memo, useCallback, useEffect, useState } from 'react'
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
	const [place, setPlace] = useState<API.TypeAddPlace>({
		name: '',
		description: '',
		latitude: 0,
		longitude: 0,
	})
	const [openPopup, setOpenPopup] = useState(false)
	const [visitedPlaces, setVisitedPlaces] = useState<API.TypeVisitedPlace[]>()
	const [latLng, setLatLng] = useState<IClickOptions>()

	const addPlace = useCallback(() => {
		setIsLoading(true)
		console.log(place)
		if (
			place &&
			place.latitude !== 0 &&
			place.longitude !== 0 &&
			place.name !== '' &&
			place.description !== ''
		) {
			API.addVisitedPlace(place)
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
	}, [place])

	useEffect(() => {
		setIsLoading(true)
		API.getAllVisitedPlaces()
			.then(response => {
				setVisitedPlaces(response.data)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	const handleOpenPopup = useCallback((e: any) => {
		setPlace(prev => ({
			...prev,
			latitude: e.latLng[0],
			longitude: e.latLng[1],
		}))
		console.log('Сработало')
		setOpenPopup(true)
	}, [])

	const handleClosePopup = useCallback((e: any) => {
		setOpenPopup(false)
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
				{visitedPlaces?.map(vp => (
					<Marker
						width={50}
						color={marker_color}
						anchor={[vp.latitude, vp.longitude]}
						hover={true}
					/>
				))}
				{openPopup ? (
					<Marker
						className={`${openPopup ? 'overlayActive' : 'overlayDisabled'}`}
						width={50}
						color={marker_color}
						anchor={[place ? place.latitude : 0, place ? place.longitude : 0]}
						hover={true}
						onClick={handleClosePopup}
					/>
				) : (
					''
				)}
			</Map>
			{openPopup ? (
				<div className='form'>
					<TextField
						required
						className='overlayText'
						label='Название'
						slotProps={{
							input: { style: { color: 'white' } },
							inputLabel: { style: { color: 'white' } },
						}}
						value={place.name}
						onChange={e =>
							setPlace(prev => ({ ...prev, name: e.target.value }))
						}
					/>
					<TextField
						required
						className='overlayText'
						label='Описание'
						slotProps={{
							input: { style: { color: 'white' } },
							inputLabel: { style: { color: 'white' } },
						}}
						value={place.description}
						onChange={e =>
							setPlace(prev => ({ ...prev, description: e.target.value }))
						}
					/>
					<Button variant='outlined' onClick={addPlace} sx={{ margin: '10px' }}>
						Добавить
						{/* <button className='overlay_button'>Посмотреть</button> */}
					</Button>
				</div>
			) : (
				''
			)}
		</div>
	)
})
