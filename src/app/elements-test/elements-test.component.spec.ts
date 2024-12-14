import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsTestComponent } from './elements-test.component';

describe('ElementsTestComponent', () => {
  let component: ElementsTestComponent;
  let fixture: ComponentFixture<ElementsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
