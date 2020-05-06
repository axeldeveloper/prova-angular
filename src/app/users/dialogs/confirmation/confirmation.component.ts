import { Component, Inject } from '@angular/core';  
  
@Component({  
    selector: 'app-delete-confirmation',  
    template: `  
        <h1 mat-dialog-title>Are you want to delete?</h1>    
        <mat-dialog-actions>  
            <button mat-raised-button [mat-dialog-close]="true">YES</button>  
            <button mat-raised-button [mat-dialog-close]="false">NO</button>  
        </mat-dialog-actions>  
    `  
})  
export class ConfirmationComponent{  

    constructor(){  
    }
     
}  