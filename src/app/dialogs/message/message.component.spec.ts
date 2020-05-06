import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { MessageComponent } from './message.component';


describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
      declarations: [ MessageComponent ], 
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
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1) - Criando componente', () => {
    expect(component).toBeTruthy();
  });
});
