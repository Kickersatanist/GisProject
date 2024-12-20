import { TypeVisitedPlace } from '../places'

export type TypePost = {
	postId: number
	name: string
	date: string
	visitedPlaceId: number
	visitedPlace: TypeVisitedPlace | null
	mark: number
	description: string
	postPhotos: []
}
