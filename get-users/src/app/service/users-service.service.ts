import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Users } from '../interface/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  usersUrl = `https://reqres.in/api/users`
  Users: any
  constructor(private Http: HttpClient) { }

//** Mapping the API to get the nested data **/
  getUsers(): Observable<Users[]>{
    return this.Http.get<any>(this.usersUrl)
      .pipe(map(res => res.data))
  }
}
