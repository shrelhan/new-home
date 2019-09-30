import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCComponent } from './card-c.component';

describe('CardCComponent', () => {
  let component: CardCComponent;
  let fixture: ComponentFixture<CardCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
