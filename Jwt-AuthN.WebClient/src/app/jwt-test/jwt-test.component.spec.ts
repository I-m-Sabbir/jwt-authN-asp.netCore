import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtTestComponent } from './jwt-test.component';

describe('JwtTestComponent', () => {
  let component: JwtTestComponent;
  let fixture: ComponentFixture<JwtTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwtTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
