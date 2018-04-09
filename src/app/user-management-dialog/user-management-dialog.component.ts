import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';


@Component({
  selector: 'app-user-management-dialog',
  templateUrl: './user-management-dialog.component.html',
  styleUrls: ['./user-management-dialog.component.css']
})
export class UserManagementDialogComponent   {

  constructor(public activeModal: NgbActiveModal) {

     }

 

  clear() {
    this.activeModal.dismiss('cancel');
  }

}


@Component({
  selector: 'app-user-dialog',
  template: ''
})
export class UserDialogComponent implements OnInit, OnDestroy {

  routeSub: any;

  constructor(
    private route: ActivatedRoute,
    private userModalService: UserService
  ) { }

  ngOnInit() {
  
    this.routeSub = this.route.params.subscribe((params) => {
     
        this.userModalService.open(UserManagementDialogComponent as Component);
    });

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
