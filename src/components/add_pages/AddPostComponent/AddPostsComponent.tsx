import { Alert, Box, Button, Input, TextField } from '@mui/material'
// import { Grid } from '@mui/material/Grid2'
import { memo, useCallback, useEffect, useState } from 'react'
import * as API_posts from '@/shared/api/posts'
import * as API_places from '@/shared/api/places'
import './AddPostsComponent.module.css'
import { DateField } from '@mui/x-date-pickers/DateField'

export const AddPostsComponent = memo(() => {
	const [isLoading, setIsLoading] = useState(false)
	const [post, setPost] = useState<API_posts.TypeAddPost>({
		mark: 0,
		visitedPlaceId: 0,
		name: '',
		date: new Date().toISOString(),
		description: '',
		postPhotoIds: [],
	})

	const addPost = useCallback(() => {
		setIsLoading(true)
		console.log(post)
		if (
			post &&
			post.mark !== 0 &&
			post.visitedPlaceId !== 0 &&
			post.name !== '' &&
			post.description !== ''
		) {
			API_posts.addPost(post)
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
	}, [post])

	const getPlaces = useCallback(() => {
		API_places.getAllVisitedPlaces()
			.then((response: any) => {
				console.log(response)
				return <Alert severity='success'>Места получены.</Alert>
			})
			.catch((error): any => {
				return <Alert severity='error'>Ошибка: {error}.</Alert>
			})
	}, [])

	return (
		// <Grid>
		<div className='container'>
			<div className='form'>
				<TextField
					required
					className='overlayText'
					label='Название'
					slotProps={{
						input: { style: { color: 'white' } },
						inputLabel: { style: { color: 'white' } },
					}}
					value={post.name}
					onChange={e => setPost(prev => ({ ...prev, name: e.target.value }))}
				/>
				<TextField
					required
					className='overlayText'
					label='Описание'
					slotProps={{
						input: { style: { color: 'white' } },
						inputLabel: { style: { color: 'white' } },
					}}
					value={post.description}
					onChange={e =>
						setPost(prev => ({ ...prev, description: e.target.value }))
					}
				/>
				{/* <DateField
						required
						className='overlayText'
						label='Дата'
						format='DD/MM/YYYY'
						slotProps={{
							input: { style: { color: 'white' } },
							inputLabel: { style: { color: 'white' } },
						}}
						value={post.date}
						onChange={newValue =>
							setPost(prev => ({ ...prev, date: newValue! }))
						}
					/> */}
				<TextField
					required
					className='overlayText'
					label='Идентификатор места'
					slotProps={{
						input: { style: { color: 'white' } },
						inputLabel: { style: { color: 'white' } },
					}}
					value={post.visitedPlaceId}
					onChange={e =>
						setPost(prev => ({
							...prev,
							visitedPlaceId: Number(e.target.value),
						}))
					}
				/>
				<TextField
					required
					className='overlayText'
					label='Оценка'
					slotProps={{
						input: { style: { color: 'white' } },
						inputLabel: { style: { color: 'white' } },
					}}
					value={post.mark}
					onChange={e =>
						setPost(prev => ({
							...prev,
							mark: Number(e.target.value),
						}))
					}
				/>
				<Button variant='outlined' onClick={addPost} sx={{ margin: '10px' }}>
					Добавить
					{/* <button className='overlay_button'>Посмотреть</button> */}
				</Button>
				<Button variant='outlined' onClick={getPlaces} sx={{ margin: '10px' }}>
					Получить места
					{/* <button className='overlay_button'>Посмотреть</button> */}
				</Button>
			</div>
		</div>
	)
})
