import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMessageModalComponent } from './dialog-message-modal.component';

describe('DialogMessageModalComponent', () => {
  let component: DialogMessageModalComponent;
  let fixture: ComponentFixture<DialogMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMessageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
