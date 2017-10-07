// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	firebaseConfig: {
		apiKey: 'AIzaSyBpzP5Elt_aSv3KB87n_VRVvuJ7ZeXHugM',
		authDomain: 'dashboard-braun-marketing.firebaseapp.com',
		databaseURL: 'https://dashboard-braun-marketing.firebaseio.com',
		projectId: 'dashboard-braun-marketing',
		storageBucket: 'dashboard-braun-marketing.appspot.com',
		messagingSenderId: '774638353867'
	}
};
