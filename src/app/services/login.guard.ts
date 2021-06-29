import { Injectable} from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})

export class LoginGuard implements CanActivate {

  constructor(private router: Router ) {}

  canActivate() : boolean {
    const token = localStorage.getItem('token-user-logged');
    if(token == null || token == undefined){
      this.router.navigate(['/login']);
      return false
    }
    return true
  }
}




































// async canActivate() {
//   this.store.dispatch(fromActions.GetUser());
//   this.suscription = await this.store.pipe(select(fromAuth.getAuth))
//     .subscribe((state:any)=>this.userLogged = state.userLogged);
//   console.log(this.userLogged);
//   if(this.userLogged.token === "")
//     return false
//   else
//     return true  
// }
// ngOnDestroy(){
//   this.suscription.unsubscribe()
// }