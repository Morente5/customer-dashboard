import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sectionNameP' })
export class SectionPipe implements PipeTransform {
	transform(sectionName: string): string {
		switch (sectionName) {
			case 'analytics':
				return 'Analítica Web'
			case 'ad-words':
				return 'Adwords'
			case 'passwords':
				return 'Contraseñas'
			case 'actions':
				return 'Acciones'
			case 'support':
				return 'Soporte'
		}
	}
}
