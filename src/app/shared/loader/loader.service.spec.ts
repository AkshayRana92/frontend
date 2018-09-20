import { TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });
  });

  it('should be created', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('should start loading', inject([LoaderService], (service: LoaderService) => {
    const obj = {style: {display: 'none'}};
    spyOn(document, 'getElementById').and.returnValue(obj);
    service.startLoading();
    expect(document.getElementById).toHaveBeenCalled();
    expect(obj.style.display).toEqual('block');
  }));

  it('should stop loading', inject([LoaderService], (service: LoaderService) => {
    const obj = {style: {display: 'block'}};
    spyOn(document, 'getElementById').and.returnValue(obj);
    service.stopLoading();
    expect(document.getElementById).toHaveBeenCalled();
    expect(obj.style.display).toEqual('none');
  }));
});
