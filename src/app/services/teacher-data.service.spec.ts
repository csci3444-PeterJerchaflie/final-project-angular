import { TestBed, inject } from '@angular/core/testing';

import { TeacherDataService } from './teacher-data.service';

describe('TeacherDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherDataService]
    });
  });

  it('should be created', inject([TeacherDataService], (service: TeacherDataService) => {
    expect(service).toBeTruthy();
  }));
});
