import * as firebase from 'firebase/app';

export interface Roles {
	reader: boolean
	author?: boolean
	admin?: boolean
}
export interface User {
	displayName?: string
	email: string
	emailVerified: boolean
	photoURL?: string
	roles?: Roles
	projects?: any  // Reminder: Develop when app manages Projects
}
