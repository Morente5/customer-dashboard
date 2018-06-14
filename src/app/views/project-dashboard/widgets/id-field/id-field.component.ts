import { NotificationsService } from 'angular2-notifications';
import { ProjectService } from './../../services/project.service';
import { Component, OnChanges, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'bmc-id-field',
	templateUrl: './id-field.component.html',
	styleUrls: ['./id-field.component.scss']
})
export class IdFieldComponent implements OnChanges {

	formId: FormGroup
	@Input() label
	@Input() value
	@Input() projectID
	@Input() type
	@Input() key
	constructor(
		private fb: FormBuilder,
		public projectService: ProjectService,
		private route: ActivatedRoute,
		public notificationsService: NotificationsService
	) { }

	ngOnChanges() {
		this.createForm()
	}

	createForm(): void {
		this.formId = this.fb.group({
			[this.key]: [this.value]
		})
	}

	setID() {
		this.projectService.setID(

			this.route.snapshot.data.project.id,
			this.type,
			this.formId.value
		)
			.then(() => {
				this.notificationsService.success(`Document (${this.label}) modified.`)
			})
	}

}
