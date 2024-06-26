import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagenComponent } from './datagen.component';

describe('DatagenComponent', () => {
  let component: DatagenComponent;
  let fixture: ComponentFixture<DatagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
