import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../interfaces/LoginRequest'
import { Formulario } from '../../utils/formulario';
import { LoginService } from '../../services';
import { Router } from '@angular/router';
const ValidationMessage = {
  email: { required: 'El Nombre es obligatorio', email:'El correo ingresado es inválido', maxlength:'Son permitidos máximo 20 caracteres' },
  password: { required: 'La contraseña es obligatoria', minlength:'Una contraseña tiene al menos 6 caracteres', maxlength:'Son permitidos máximo 20 caracteres' },
  codeApp: { required: 'El código de la APP es obligatorio', minlength:'Son permitidos mínimos 4 caracteres', maxlength:'Son permitidos máximo 20 caracteres'}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Formulario implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private loginService: LoginService) { 
    super({...ValidationMessage})
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      email: [ 'adspruebas@quipu.com', [Validators.required, Validators.email,Validators.maxLength(6)] ],
      password: [ '0591707655001', [Validators.required, Validators.minLength(6), Validators.maxLength(6)] ],
      codeApp: [ 'makidesktop', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]        
    });
  }
  onSubmit(){
    let userToLogin : LoginRequest = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
      codeApp: this.loginForm.get('codeApp').value,
    }

    this.loginService.login(userToLogin)
      .subscribe(user=>{
        this.router.navigate(['/products']);
        localStorage.setItem('token-user-logged', user.token);
      },error=>{
        console.log(error)
      })
  }

}
