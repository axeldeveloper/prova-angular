import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DeleteComponent } from './users/dialogs/delete/delete.component';
import { ConfirmationComponent } from './users/dialogs/confirmation/confirmation.component';
import { MessageComponent } from './dialogs/message/message.component';




@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidenavListComponent,
		HomeComponent,
		UserListComponent,
		DeleteComponent,
		MessageComponent,
		ConfirmationComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
		RoutingModule,
		MaterialModule,
	],
	entryComponents: [
		DeleteComponent, 
		MessageComponent,
		ConfirmationComponent
	],
	providers: [CepService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
