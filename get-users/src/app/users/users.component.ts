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
    // this.getUsers()
    // console.table(this.users)
    this.userService.getUsers()
    .subscribe((data: any) => {
      console.table(data)
      this.users = data.value
    })

  }

  // getUsers(){
  //   this.userService.getUsers()
  //   .subscribe((data: any) => {
  //     console.table(data)
  //     this.users = data.value
  //   })
  // }

  // getUserData(){
  //   this.userService.getUsers().subscribe((response: any) => {
  //   console.log(response);
  //   this.users.push(...response)
  //   // console.log(this.posts);
  // })
  // }

}
