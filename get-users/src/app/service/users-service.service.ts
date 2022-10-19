import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interface/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  usersUrl = `https://reqres.in/api/users`

  constructor(private Http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.Http.get<Users[]>(this.usersUrl)
  }

}
