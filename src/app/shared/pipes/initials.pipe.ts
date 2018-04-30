import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
	transform(name: string): string {
		if (name) {
			const names = name.split(' ');
			return names
				.map(n => n.charAt(0))
				.splice(0, 2)
				.join('')
				.toUpperCase();
		}
		return '';
	}
}
