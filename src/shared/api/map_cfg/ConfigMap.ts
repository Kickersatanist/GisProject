const MAPTILER_ACCESS_TOKEN = 'RF9cHiswjIGfoqsh5AQs'
const MAP_ID = 'streets-v2'

export const mapTiler = (
	x: number,
	y: number,
	z: number,
	dpr: number | undefined
) => {
	return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
		dpr! >= 2 ? '@2x' : ''
	}.png?key=${MAPTILER_ACCESS_TOKEN}`
}

export const marker_color = '#332f4d'
