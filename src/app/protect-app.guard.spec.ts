import { TestBed, async, inject } from '@angular/core/testing';

import { ProtectAppGuard } from './protect-app.guard';

describe('ProtectAppGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectAppGuard]
    });
  });

  it('should ...', inject([ProtectAppGuard], (guard: ProtectAppGuard) => {
    expect(guard).toBeTruthy();
  }));
});
