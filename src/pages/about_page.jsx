import React from 'react'
import AboutInfo from '../components/about_page/about_info/about_info'
import AboutPerson from '../components/about_page/about_person/about_person'
import Recommendations from '../components/about_page/recommendations/recommendations'
import AnimatedPage from '@/components/animated_page/animated_page'

const About = () => {
	return (
		<AnimatedPage>
			<head>
				<title>Foodgasm</title>
			</head>
			<div className='about-page'>
				<AboutInfo />
				{/* <AboutPerson /> */}
				<Recommendations />
			</div>
		</AnimatedPage>
	)
}

export default About
