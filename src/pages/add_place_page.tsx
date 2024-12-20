import { AddPlacesComponent } from '@/components/add_pages/add_post_page/AddPlacesComponent'
import AnimatedPage from '@/components/animated_page/animated_page'
import { memo } from 'react'

const AddPlace = memo(() => {
	return (
		<AnimatedPage>
			<head>
				<title>Карта ресторанов</title>
			</head>
			<div className='add-post-page'></div>
			<AddPlacesComponent></AddPlacesComponent>
		</AnimatedPage>
	)
})

export default AddPlace
