export class IUser {
	id?: string
	displayName?: string
	email: string
	emailVerified: boolean
	photoURL?: string
	access?: 'master' |	'admin' | 'author' | 'reader'
	projects?: {[name: string]: boolean}
}

export class User implements IUser {
	id?: string;
	displayName?: string;
	email: string;
	emailVerified: boolean;
	photoURL?: string;
	access?: 'master' | 'admin' | 'author' | 'reader';
	projects?: { [name: string]: boolean; };

	constructor() {

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
		return this.access === 'admin' || this.access === 'master'
	}

	get verified(): boolean {
		return this.emailVerified
	}
}
