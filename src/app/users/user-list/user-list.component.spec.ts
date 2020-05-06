import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatDialogModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { BrowserModule, By } from '@angular/platform-browser';

import { CepService } from '../../cep.service';
import { PersistanceService } from '../../services/persistance.service'
import { UserListComponent } from './user-list.component';


describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
            declarations: [ UserListComponent ],
            imports: [
                MaterialModule,
                RouterTestingModule, 
                MatDialogModule, 
                MatTableModule,
                ReactiveFormsModule,
                FormsModule,
                HttpClientModule,
                BrowserModule
            ],
            providers: [
                {provide: PersistanceService , useClass: PersistanceService },
                CepService    
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it(`1) Teste - title 'teste-helpper'`, () => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('teste-helpper');
    });
 
    it('2) Teste - Depois de renderizado - title', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.main-wrapper h3').textContent).toContain('Users - teste-helpper');
    });

    it('3) Teste - New Pessoa', () => {
        //const fixture = TestBed.createComponent(UserListComponent);    
        fixture.componentInstance.addPerson();
        fixture.detectChanges();  
          // Then
        expect(fixture.componentInstance.selectedPerson).toEqual({});     
    });

    it('4) Teste - Setar campo do formulário no modelo', () => {
        const cpf = '01468115198';
        const nome = 'axel';
     
        fixture.componentInstance.addPerson();
        fixture.detectChanges();

        const inputCpf = fixture.debugElement.query(By.css('input[name="cpf"]'));
        const inputElCpf = inputCpf.nativeElement;
              inputElCpf.value = '01468115198';

        const inputNome = fixture.debugElement.query(By.css('input[name="name"]'));
        const inputElNome = inputNome.nativeElement;
              inputElNome.value = 'axel';      

       
        inputElCpf.focus();
        inputElNome.focus();
    
        fixture.componentInstance.selectedPerson.cpf = cpf;
        fixture.componentInstance.selectedPerson.name = nome;
        inputElCpf.dispatchEvent(new Event('input'));
        inputElNome.dispatchEvent(new Event('input'));
        fixture.detectChanges(); 
        // Then
        expect(fixture.componentInstance.selectedPerson.cpf).toEqual(cpf);
        expect(fixture.componentInstance.selectedPerson.name).toEqual(nome);
    });
    
    it('5) Teste - Table header e quantidade', (done) => {
        
        const row = fixture.componentInstance.getPerson();
        const qtd = row.length + 1;
    
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
    
            let tableRows = fixture.nativeElement.querySelectorAll('tr');
            expect(tableRows.length).toBe(qtd);
    
            // Header row
            let headerRow = tableRows[0];
            expect(headerRow.cells[0].innerHTML).toBe(' Nome ');
            expect(headerRow.cells[1].innerHTML).toBe(' CPF ');
            expect(headerRow.cells[2].innerHTML).toBe(' Telefone ');
            expect(headerRow.cells[3].innerHTML).toBe(' E-mail ');
    
            // Data rows
            let row1 = tableRows[1];
            expect(row1.cells[0].innerHTML).toBe(' Maria Flores ');
            expect(row1.cells[1].innerHTML).toBe(' 83321492075 ');
            expect(row1.cells[2].innerHTML).toBe(' 1533283928 ');
            expect(row1.cells[3].innerHTML).toBe(' maria_f@gmail.com ');
            done();
        });
    });

    it('6) Teste - Criando componente em user-list', () => {
        expect(component).toBeTruthy();
    });

});
