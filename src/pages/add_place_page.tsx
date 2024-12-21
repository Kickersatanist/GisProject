import { AddPlacesComponent } from '@/components/add_pages/AddPlacesComponent/AddPlacesComponent'
import AnimatedPage from '@/components/animated_page/animated_page'
import { memo } from 'react'

const AddPlace = memo(() => {
	return (
		<AnimatedPage>
			<head>
				<title>Добавить место</title>
			</head>
			<div className='add-place-page'></div>
			<AddPlacesComponent></AddPlacesComponent>
		</AnimatedPage>
	)
})

export default AddPlace
