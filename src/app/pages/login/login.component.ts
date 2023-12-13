import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ShowPasswordDirective } from '../../shared/directives/show-password.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ShowPasswordDirective,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginFormGrp!: FormGroup;

  private _loadingSpinner = false;
  get loadingSpinner(): boolean {
    return this._loadingSpinner;
  }
  set loadingSpinner(v: boolean) {
    this._loadingSpinner = v;
    if (v) {
      this.loginFormGrp.disable();
    } else {
      this.loginFormGrp.enable();
    }
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.loginFormGrp = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.loadingSpinner || this.loginFormGrp.invalid) {
      return;
    }
    this.loadingSpinner = true;
    setTimeout(() => {
      this.loadingSpinner = false;
    }, 3000);
    console.log(this.loginFormGrp.value);
  }
}
