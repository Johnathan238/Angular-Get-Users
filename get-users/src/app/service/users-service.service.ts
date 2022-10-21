import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Users } from '../interface/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  usersUrl = `https://reqres.in/api/users`
  Users:BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private Http: HttpClient) { }

  // getUsers(): Observable<any>{
  //   return this.Http.get<any>(this.usersUrl)
  //     .pipe(map(data => {
  //       this.Users.next(data.data)
  //       return this.Users
  //     }))
  // }


  getUsers(): Observable<Users[]>{
    return this.Http.get<Users[]>(this.usersUrl)
  }
}
