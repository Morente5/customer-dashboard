import { Component, OnInit } from '@angular/core';

import { RouterService } from 'app/tools/services/router/router.service';


// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';

@Component({
	selector: 'bmc-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

	public clients = {
		'yofisio': {
			name: 'YoFisio',
			logo: 'https://pbs.twimg.com/profile_images/872056183460429824/o_hp4AUp.jpg'
		},
		'clinica-martin-gomez': {
			name: 'Clínica Martín Gómez',
			logo: 'https://pbs.twimg.com/profile_images/577449373866418176/1rtcSAvr.png'
		},
		'podologo-granada': {
			name: 'Podólogo Granada',
			logo: 'https://clinicapodologofdezalguacil.es/wp-content/uploads/2017/07/Logo-podologogranada.png'
		},
		'nombre-largo': {
			name: 'Cliente con nombre largo',
			logo: 'https://clinicapodologofdezalguacil.es/wp-content/uploads/2017/07/Logo-podologogranada.png'
		},


	}
	constructor(
		public routerService: RouterService
	) {	}

	ngOnInit() {

	}

	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
