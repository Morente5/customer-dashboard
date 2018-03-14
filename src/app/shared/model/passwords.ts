
export interface PasswordGroup {
	groupName: string
	groupFields?: PasswordField[]
}
export class PasswordGroup implements PasswordGroup { }

export interface PasswordField {
	name: string
	value?: string
	isPassword?: boolean
	visible?: boolean
}

export class PasswordField implements PasswordField {

	constructor(fields?: PasswordField) {
		this.visible = false
		if (fields) {
			Object.assign(this, fields)
		}
	}

	public toggleVisibility(): void {
		this.visible = !this.visible
	}
}
