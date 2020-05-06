import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersistanceService } from '../../../services/persistance.service';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<DeleteComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: any,
		public persistanceService: PersistanceService

	) { }

	ngOnInit() {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
	
	confirmDelete(): void {
		this.persistanceService.remove('persons', this.data)
	}

}
