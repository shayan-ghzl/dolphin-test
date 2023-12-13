import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowPassword]',
  standalone: true,
  exportAs: 'appShowPassword'
})
export class ShowPasswordDirective {
  showPassword = false;
  
  @HostListener('click')
  toggle() {
    this.showPassword = !this.showPassword;
  }
}
