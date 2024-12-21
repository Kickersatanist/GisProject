import { AddPostsComponent } from '@/components/add_pages/AddPostComponent/AddPostsComponent'
import AnimatedPage from '@/components/animated_page/animated_page'
import { memo } from 'react'

const AddPost = memo(() => {
	return (
		<AnimatedPage>
			<head>
				<title>Добавить пост</title>
			</head>
			<div className='add-post-page'></div>
			<AddPostsComponent></AddPostsComponent>
		</AnimatedPage>
	)
})

export default AddPost
