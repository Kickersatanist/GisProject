import React from 'react'
import './about_info.css'
import about_logo from '../../../img/about_logo.svg'
import about_person from '../../../img/author.png'

const AboutInfo = () => {
	return (
		<div className='medium-purple'>
			<div className='container'>
				<div className='main'>
					<div className='main_cover'>
						<img src={about_person} alt='' />
					</div>
					<div className='main__text'>
						<h1 className='title-h1 main__title'>Погодейкина Алина</h1>
						<p className='main__description'>
							Люблю вкусно покушать и делюсь своими впечатлениями с вами!
						</p>
						<p className='main__description'>
							Учусь на 4 курсе в СФУ, очень люблю учиться!
						</p>
					</div>
				</div>
			</div>
		</div>

		// 		<div className='about_info'>
		// 			<div className='about_content'>
		// 				<p>
		// 					Наш сайт “Foodgasm” предназначен для людей, увлеченных вкусной и
		// 					недорогой едой, желающих делиться своими любимыми блюдами c другими.
		// 					Главная цель - уменьшить финансовые затраты и затраты по времени,
		// 					чтобы студенты шли в ресторан, зная, какие блюда нужно брать и за
		// 					какую цену.
		// 				</p>
		// 				<div className='about_logo'>
		// 					<img src={about_logo} alt='' />
		// 				</div>
		// 			</div>
		// 		</div>
	)
}

export default AboutInfo
