import { TestBed } from '@angular/core/testing';

import { PersistanceService } from './persistance.service';

describe('PersistanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('1) Teste Criando serviços', () => {
    const service: PersistanceService = TestBed.get(PersistanceService);
    expect(service).toBeTruthy();
  });
});
