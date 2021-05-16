import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { LoginComponent } from './login.component';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        FormBuilder
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should comprobate is form is valid',(() => {
    component.form.controls['email'].setValue('example@gmail.com');
    component.form.controls['pass'].setValue('test1234');
    fixture.detectChanges();
    expect(component.form.invalid).toBeFalsy();
   
  }));

  it('should comprobate is form is invalid',(() => {
    component.enviar();
    expect(component.form.invalid).toEqual(true);
  }));

  it('should comprobate toggle',(() => {
    var checked = {
      detail: {
        checked: true
      }
    }
   component.myChange(checked);


 
  }));
});

