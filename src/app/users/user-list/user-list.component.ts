import { Component, OnInit } from '@angular/core';
import { CepService } from '../../cep.service';
import { PersistanceService } from '../../services/persistance.service'

import { DeleteComponent } from '../dialogs/delete/delete.component';
import { ConfirmationComponent } from '../dialogs/confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from 'src/app/dialogs/message/message.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

  	title = 'teste-helpper'

	persons = [
		{
			name: 'Teste',
			cpf: 'Teste',
			phone: 'Teste',
			email: 'Teste',
			cep: 'Teste',
			state: 'Teste',
			city: 'Teste',
			street: 'Teste',
		}
	]
	columns = ['name', 'cpf', 'phone', 'email', 'cep', 'state', 'city', 'street', 'actions']
	selectedPerson
	loading


  constructor(
      public cep: CepService,
	  public persistanceService: PersistanceService,
	  public dialog: MatDialog,
	  public router: Router
      ) { }

	ngOnInit() {
        let data = this.getPerson();
        if ( data){
            this.persons = data;
        }          
        else{
            this.persistanceService.populateTable('persons');
            this.persons = this.getPerson();
        }
    }

    getPerson(){
        return this.persistanceService.getLocal('persons');      
    }
  
    addPerson() {
		this.selectedPerson = {}
	}

	editPerson(person) {
		this.selectedPerson = { ...person }
	}

	deletePerson(i, person) {
		const dialogRef = this.dialog.open(DeleteComponent, {
			data: person
		});	
		dialogRef.afterClosed().subscribe(result => {
			if (result === 1) {
				const foundIndex = this.persons.findIndex(x => x.name === person.name);
				this.persons.splice(foundIndex, 1);
				this.persons = this.getPerson();
			}
		});
	}

	changeCep(event) {
		var cep = event.target.value
		if (cep.length == 8) {
			this.loading = true
			this.cep.getCep(cep).then((apiResponse: any) => {
				if (apiResponse.erro) {
					alert('Cep não encontrado')
				} else {
					this.selectedPerson = {
						...this.selectedPerson,
						cep: apiResponse.cep.replace('-', ''),
						state: apiResponse.uf,
						city: apiResponse.localidade,
						street: apiResponse.logradouro
					}
				}
			}).catch(error => {
				alert('Erro ao buscar o cep')
				console.error(error)
			}).finally(() => this.loading = false)
		}
	}

	cancel() {
		this.selectedPerson = null
	}

	submit(person) {
		var error = false
		this.columns.forEach(key => {
			if (key != 'actions' && !person[key]) {
				error = true
			}
		})

		if (error) 
		{
			this.dialog.open(MessageComponent, { data: {
				title   :  'Informação',
				message :  'Erro!\nPreencha todos os campos!',
				success :  false
			}});


		}
		else 
		{
			this.persistanceService.save('persons', person);			
			const dialogRef = this.dialog.open(MessageComponent,{ data: {
				title   :  'Sucesso',
				message :  'Registro salvo com sucesso!',
				success : true
			}});
			dialogRef.afterClosed().subscribe(result => {		
				if (result) {				
					this.persons = this.getPerson();
					this.selectedPerson = null
				}
			});	
		}
    }
    
}