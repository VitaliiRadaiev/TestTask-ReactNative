export class Http {
	static HEADERS = {'Content-Type': 'application/json'}

	static async get(url) {
		try {
			return await request(url, 'GET')
		} catch(e) {
			throw e;
			console.log(e);
		}
	}
}

async function request(url, method = 'GET', data) {
	const config = {
		method,
		headers: Http.HEADERS,
	}

	if(method === 'POST' || method === 'PATCH') {
		config.body = JSON.stringify(data);
	}

	const response = await fetch(url, config);
	return await response.json();
}