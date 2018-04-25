import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from '@bmc-core/model/user';

@Injectable()
export class UserService {

	constructor(
		private afs: AngularFirestore
	) { }

	public user$(userID: string): Observable<User> {
		if (userID) {
			const path = `users/${userID}`
			return this.afs.doc(path).snapshotChanges().map(user => {
				const data = user.payload.data() as User
				const id = user.payload.id
				return new User({ id, ...data })
			})
		}
		return Observable.of(null)
	}

}
