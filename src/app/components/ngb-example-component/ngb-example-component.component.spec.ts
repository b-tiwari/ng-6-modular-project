import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbExampleComponent } from './ngb-example-component.component';

describe('NgbExampleComponentComponent', () => {
  let component: NgbExampleComponent;
  let fixture: ComponentFixture<NgbExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
