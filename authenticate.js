const MoltinGateway = require('@moltin/sdk').gateway;

async function commerceToken(keys) {
	try {
		if (keys &&
			keys?.client_id &&
			keys?.client_secret) {
			const creds = {
				client_id: keys?.client_id,
				client_secret: keys?.client_secret
			};
			const Moltin = MoltinGateway(creds);
			let commerce_token = await Moltin.Authenticate();
			return commerce_token.access_token;
		}
		else {
			return "invalid credentials"
		}
	} catch (err) {
		return err ;
	}
};

module.exports = commerceToken ;