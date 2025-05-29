import { Component, OnInit } from '@angular/core';
import { User } from '../../material/formcontrols/autocomplete/autocomplete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUsersComponent } from '../components/add-users/add-users.component';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:any = [];

  isLoading$:any;

  constructor(
    public _userService:UsersService,
    public modalService:NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._userService.isLoading$;
    this.allUsers();
  }
  allUsers(){
    this._userService.allUsers().subscribe((resp:any) => {
      console.log(resp);
      this.users = resp.users;
    });
  }

  openCreate(){
    const modalRef = this.modalService.open(AddUsersComponent, {centered:true,size: "md"});
    modalRef.result.then(
      () => {
        
      },() => {
        
      }
    );
    modalRef.componentInstance.UserC.subscribe((resp:any) => {
      console.log(resp);
    })
  }

  editUser(user){

  }
  delete(user){

  }
}
