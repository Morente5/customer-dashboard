export interface PasswordGroup {
	id: string
	groupName: string
	groupFields?: PasswordField[]
}
export class PasswordGroup implements PasswordGroup {
	constructor(args?) {
		if (args) {
			Object.assign(this, args)
		}
	}
}

export interface PasswordField {
	id?: string
	name: string
	value?: string
	isPassword?: boolean
}

export class PasswordField implements PasswordField {

	constructor(fields?) {
		if (fields) {
			Object.assign(this, fields)
		}
	}

}
