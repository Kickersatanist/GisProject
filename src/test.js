const firstArray = [1, 2, 3, 4, 5]
const secondArray = [3, 4, 5, 6]develop

let unionArray = []

unionArray =
	firstArray.length < secondArray.length
		? firstArray.filter(elem => secondArray.includes(elem))
		: secondArray.filter(elem => firstArray.includes(elem))

console.log(unionArray)
