import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { AdminUsersService } from './../../services/users/admin-users.service';

import { AngularFirestoreDocument } from 'angularfire2/firestore';
// import { RolesPipe } from './../../../../shared/pipes/user-role.pipe';
import { User } from '../../../../shared/model/user';
import { ProjectsService } from './../../../../shared/services/projects/projects.service';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

@Component({
	selector: 'bmc-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

	user$: Observable<User>
	user: User

	userDataForm: NgForm

	constructor(
		private route: ActivatedRoute,
		private adminUsersService: AdminUsersService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {

		this.user$ = this.route.params.pipe(
			switchMap(params => {
				const userID = params['userID'];
				return this.adminUsersService.getUserDocument$(userID).snapshotChanges()
			}),
			map(user => {
				const data = user.payload.data() as User
				const id = user.payload.id
				return {
					id,
					...data
				}
			})
		)

		this.user$.subscribe(user => this.user = user)

	}

	save() {
		console.log('save')
	}

}
