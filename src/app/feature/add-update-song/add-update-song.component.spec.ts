import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddUpdateSongComponent } from './add-update-song.component';

describe('AddUpdateSongComponent', () => {
  let component: AddUpdateSongComponent;
  let fixture: ComponentFixture<AddUpdateSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, ],
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

  it('song form should submit', ()=>{
    component.addSong();
    expect(component.songForm.valid).toBeTruthy();
  })

  it('song form should be invalid', ()=>{
    component.songForm.controls['name'].setValue('');
    // component.songForm.controls['imageUrl'].setValue('');
    component.songForm.controls['songUrl'].setValue('');
    expect(component.songForm.valid).toBeFalsy()
  })
  
  it('song form should be valid', ()=>{
    component.songForm.controls['name'].setValue('Song1');
    // component.songForm.controls['imageUrl'].setValue('');
    component.songForm.controls['songUrl'].setValue('https://instrumentalfx.co/wp-content/upload/11/Mission-Impossible.mp3');
    expect(component.songForm.valid).toBeTruthy()
  })
});
