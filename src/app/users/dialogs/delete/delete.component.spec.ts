import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';

import { DeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
      declarations: [ DeleteComponent ],
      imports: [
          MaterialModule,
          RouterTestingModule, 
          MatDialogModule, 
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef},
        { provide: MAT_DIALOG_DATA, useValue: [] }     
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1) Teste - Click cancelar close no dialog', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });


  it('2) Teste - Criando componente', () => {
    expect(component).toBeTruthy();
  });


});


/*
https://stackoverflow.com/questions/52993583/matdialog-service-unit-test-angular-6-error
describe('ModalService', () => {
    let modalService: ModalService;
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
    dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            providers: [ModalService]
        });
        modalService = TestBed.get(ModalService);
    });
    beforeEach(() => {
        dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    });
    it('open modal ', () => {
        modalService.open(TestComponent, '300px');
        expect(dialogSpy).toHaveBeenCalled();

        // You can also do things with this like:
        expect(dialogSpy).toHaveBeenCalledWith(TestComponent, { maxWidth: '100vw' });

        // and ...
        expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
    });
});
*/