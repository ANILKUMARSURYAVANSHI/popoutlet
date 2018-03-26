import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yog',
  templateUrl: './yog.component.html',
  styleUrls: ['./yog.component.css']
})
export class YogComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  navigateU(){
    this.router.navigate([{ outlets: { popup: ['angular'] } }]); 

  }

}
