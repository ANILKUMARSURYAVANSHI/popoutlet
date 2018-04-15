import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-myuser-management',
    templateUrl: './user-management.component.html'})
export class UserManagementComponent {

    constructor(public activeModal: NgbActiveModal) {

    }


}


