import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HeaderComponent } from '../navigation/header/header.component';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
      declarations: [ HomeComponent
        //, HeaderComponent, 
        //SidenavListComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
      expect(compiled.querySelector('.main-wrapper h3').textContent).toContain('Home - teste-helpper');
  });

  it('3) Teste - Criando componente', () => {
    expect(component).toBeTruthy();
  });

});
