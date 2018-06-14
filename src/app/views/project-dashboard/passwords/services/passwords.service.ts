import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@bmc-core/services/auth.service';
import { PasswordGroup, PasswordField } from '@bmc-views/project-dashboard/passwords/model/passwords';

@Injectable()
export class PasswordsService {

	constructor(
		private afs: AngularFirestore,
		private authService: AuthService
	) { }

	public passwordGroups$(projectID: string): Observable<PasswordGroup[]> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).snapshotChanges().pipe(
			map(passwords => {
				return passwords.map(group => {
					const groupData = group.payload.doc.data() as PasswordGroup;
					const groupId = group.payload.doc.id;
					return new PasswordGroup({ id: groupId, ...groupData })
				})
			})
		)
	}

	public passwordFields$(projectID: string, groupID: string) {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).collection('groupFields').snapshotChanges().pipe(
			map(fields => {
				return fields.map(field => {
					const fieldData = field.payload.doc.data() as PasswordField;
					const fieldId = field.payload.doc.id;
					return new PasswordField({ id: fieldId, ...fieldData })
				})
			})
		)
	}

	public addPasswordField(projectID: string, groupID: string, field: PasswordField): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).collection('groupFields').add(field)
	}

	public editPasswordField(projectID: string, groupID: string, fieldID: string, field: PasswordField): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).collection('groupFields').doc(fieldID).set({
			name: field.name,
			value: field.value,
			isPassword: field.isPassword
		})
	}

	public deletePasswordField(projectID: string, groupID: string, fieldID: string): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).collection('groupFields').doc(fieldID).delete()
	}

	public addPasswordGroup(projectID: string, groupName: string): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).add({groupName})
	}

	public editPasswordGroup(projectID: string, groupID: string, groupName: PasswordGroup): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).update({groupName})
	}

	public deletePasswordGroup(projectID: string, groupID: string): Promise<any> {
		const path = `projects/${projectID}/passwords`
		return this.afs.collection(path).doc(groupID).delete()
	}

	get editPermission(): boolean {
		return this.authService.currentUser.isAuthor || this.authService.currentUser.isAdmin
	}
}
