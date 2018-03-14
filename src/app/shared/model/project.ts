export interface Project {
	id: string
	name: string
	imgURL?: string
	sections?: {
		actions?: boolean,
		['ad-words']?: boolean,
		analytics?: boolean
		passwords?: boolean,
		support?: boolean
	}
}

export class Project implements Project {
	constructor(fields?: Project) {
		if (fields) {
			Object.assign(this, fields)
		}
	}
}
