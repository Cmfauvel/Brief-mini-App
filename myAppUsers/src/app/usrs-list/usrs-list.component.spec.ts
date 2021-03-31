import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrsListComponent } from './usrs-list.component';

describe('UsrsListComponent', () => {
  let component: UsrsListComponent;
  let fixture: ComponentFixture<UsrsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
