import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Router} from '@angular/router';
import {LoaderService} from '../../shared/loader/loader.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: LoaderService;

  const MOCK_ROUTER = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{provide: Router, useValue: MOCK_ROUTER}, LoaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to a route', () => {
    spyOn(service, 'startLoading');
    component.goTo('test');
    expect(service.startLoading).toHaveBeenCalled();
    expect(MOCK_ROUTER.navigate).toHaveBeenCalledWith(['test']);
  });
});
