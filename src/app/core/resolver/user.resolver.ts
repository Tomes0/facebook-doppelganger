import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/shared/models/user.model";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";


@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<User>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    const id = route.paramMap.get('id');
    return this.userService.getUser(+id)

  }

  constructor(
    private userService: UserService,
    private authService: AuthService
  ){}
}
