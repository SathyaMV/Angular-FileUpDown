import { ValidatorFn, AbstractControl } from '@angular/forms';

export function fileExtensionValidator(validExt: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = true;
    if (control.value) {
      const fileExt = control.value.split('.').pop();
      validExt.split(',').forEach(ext => {
        if (ext.trim() == fileExt) {
          forbidden = false;
        }
      });
    }
    return forbidden ? { 'inValidExt': true } : null;
  };
} 