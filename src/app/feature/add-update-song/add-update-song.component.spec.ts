import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSongComponent } from './add-update-song.component';

describe('AddUpdateSongComponent', () => {
  let component: AddUpdateSongComponent;
  let fixture: ComponentFixture<AddUpdateSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
