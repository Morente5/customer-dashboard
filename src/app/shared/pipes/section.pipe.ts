import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '@bmc-environments/environment';

@Pipe({ name: 'sectionNameP' })
export class SectionPipe implements PipeTransform {
	transform(sectionName: string): string {
		const sectionNames = {
			analytics: {
				en: 'Web Analytics',
				es: 'Analítica Web'
			},
			'ad-words': {
				en: 'Adwords',
				es: 'Adwords'
			},
			passwords: {
				en: 'Passwords',
				es: 'Contraseñas'
			},
			actions: {
				en: 'Actions',
				es: 'Acciones'
			},
			support: {
				en: 'Support',
				es: 'Soporte'
			},
		}
		return environment.language ?
			sectionNames[sectionName][environment.language] :
			sectionNames[sectionName]['en']

	}
}
