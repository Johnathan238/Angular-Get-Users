import { Component, OnInit } from '@angular/core';
import { Users } from '../interface/users-interface';
import { UsersServiceService } from '../service/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] = []

  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
    this.getUserData()
    console.table(this.users)
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe((res: any) => {
      console.table(res)
      this.users.push(...res)
    })
  }

  getUserData(){
    this.userService.getUsers()
    .subscribe((response: any) => {
    console.log(response);
    this.users.push(...response)
    // console.log(this.posts);
  })
  }

}
