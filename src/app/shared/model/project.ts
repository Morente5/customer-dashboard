export interface Project {
	id: string
	name: string
	imgURL?: string
	sections?: {
		actions?: boolean,
		['ad-words']?: boolean,
		analytics?: boolean
		passwords?: boolean
	}
}
