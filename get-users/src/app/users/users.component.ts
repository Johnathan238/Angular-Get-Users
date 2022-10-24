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
    // this.userService.getUsers()
    // .subscribe((data: any) => {
    //   console.table(data)
    //   this.users = data.value
    // })

    // this.userService.getUsers()
    // .subscribe((response: any) => {
    //   response.results.forEach((result: any) => {
    //     console.log(result);
    //     this.users.push(result)
    //   })
    // })
  }

  // getUsers(){
  //   this.userService.getUsers()
  //   .subscribe((data: any) => {
  //     console.table(data)
  //     this.users = data.value
  //   })
  // }

  getUserData(){
    this.userService.getUsers().subscribe((response: any) => {
    console.table(response);
    this.users.push(...response)
    // console.log(this.posts);
  })
  }

}
