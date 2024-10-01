export default function getFullResponseFromAPI(cuccess) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({
				status: 200,
			body: 'success',
			});
		} else {
			reject(Error('The Fake API is not working currently'));
		}
	});
}

