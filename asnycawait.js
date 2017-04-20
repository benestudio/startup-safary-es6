'use strict'

function resolveAfter2Seconds (x) {
	return new Promise( (resolve) => {
		setTimeout(() => {
			resolve(x)
		}, 2000)
	})
}

async function add (x) {
	var a = await resolveAfter2Seconds(20)
	var b = await resolveAfter2Seconds(30)
	return x + a + b
}

add(10).then((v) => {
	console.log(v)
})
