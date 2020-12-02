import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigetsComponent } from './wigets.component';

describe('WigetsComponent', () => {
  let component: WigetsComponent;
  let fixture: ComponentFixture<WigetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WigetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WigetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
