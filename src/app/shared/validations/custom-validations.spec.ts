import { passValidator, emailValidator, } from './custom-validations';
import { FormControl } from '@angular/forms';

describe('Custom validations', () => {

  describe('passValidator', () => {
    const phoneValidatorTest = passValidator;
    const control = new FormControl();

    it('should return the correct format password', () => {
      control.setValue('test1234');
      expect(phoneValidatorTest(control)).toEqual(null);
    });

    it('should return null', () => {
      control.setValue(null);
      expect(phoneValidatorTest(control)).toEqual({ passValidator: true });
    });
  });

  describe('emailValidator', () => {
    const emailValidatorTest = emailValidator;
    const control = new FormControl();

    it('should return the correct object the email format is correct', () => {
      control.setValue('example@gmail.com');
      expect(emailValidatorTest(control)).toEqual(null);
    });

    it('should return null', () => {
      control.setValue(null);
      expect(emailValidatorTest(control)).toEqual({ emailValidator: true });
    });
  });

});
