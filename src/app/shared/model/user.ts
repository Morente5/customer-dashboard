export interface User {
	id?: string
	displayName?: string
	email: string
	emailVerified: boolean
	photoURL?: string
	access?: 'master' |	'admin' | 'author' | 'reader'
	projects?: {[name: string]: boolean}
}

export class User implements User {
	constructor(fields?: User) {
		if (fields) {
			Object.assign(this, fields)
		}
	}

	// Returns true if user is reader
	get isReader(): boolean {
		return this.access === 'reader'
	}
	// Returns true if user is author
	get isAuthor(): boolean {
		return this.access === 'author'
	}
	// Returns true if user is admin
	get isAdmin(): boolean {
		return (this.access === 'admin' || this.access === 'master')
	}
	// Returns true if user is master
	get isMaster(): boolean {
		return this.access === 'master'
	}

	get verified(): boolean {
		return this.emailVerified
	}
}
