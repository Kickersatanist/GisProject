import dessert from '@/img/десерт.jpg'
// import cake from '../../../img/чизкейк.webp'
import juice from '@/img/сок.webp'
import burger from '@/img/burger.svg'

const restaurants = [
	{
		id: 1,
		title: 'Ресторан "Перцы”',
		description: 'Вкуснее бургера в жизни не ела...',
		imgSrc: burger,
		totalRating: 9,
	},
	{
		id: 2,
		title: 'Ресторан "Сердце"',
		description: 'Прям разрывает...',
		imgSrc: juice,
		totalRating: 4,
	},
	{
		id: 3,
		title: 'Кафе "Кайф"',
		description: 'Ну кайфануть не получилось...',
		imgSrc: dessert,
		totalRating: 6.7,
	},
	{
		id: 4,
		title: 'Кафе "Настроение"',
		description: 'Настроение тут не подняли...',
		imgSrc: dessert,
		totalRating: 5.5,
	},
]

const reviews = [
	{
		id: 1,
		restaurantId: 1,
		title: 'Капец я здраво похавала',
		description:
			'Очень понравился сочный бургер, вообще кайф, эмоции просто распирают меня, вообще не могу думать, настолько он вкусный был',
		imgSrc: [burger],
		date: '02.10.2024',
		rating: 9,
	},
	{
		id: 2,
		restaurantId: 2,
		title: 'Ресторан "Сердце"',
		description: 'Прям разрывает...',
		imgSrc: [juice],
		date: '02.10.2024',
		rating: 4,
	},
	{
		id: 3,
		restaurantId: 3,
		title: 'Кафе "Кайф"',
		description: 'Ну кайфануть не получилось...',
		imgSrc: [dessert],
		date: '02.10.2024',
		rating: 6.7,
	},
	{
		id: 4,
		restaurantId: 4,
		title: 'Кафе "Настроение"',
		description: 'Настроение тут не подняли...',
		imgSrc: [dessert],
		date: '02.10.2024',
		rating: 5.5,
	},
]

export { restaurants, reviews }
