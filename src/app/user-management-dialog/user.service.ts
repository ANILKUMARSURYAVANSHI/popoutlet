
import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class UserService {
  private ngbModalRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) {
    this.ngbModalRef = null;
  }

  open(component: Component): Promise<NgbModalRef> {
    return new Promise<NgbModalRef>((resolve, reject) => {
      const isOpen = this.ngbModalRef !== null;
      if (isOpen) {
        resolve(this.ngbModalRef);
      }

      this.ngbModalRef = this.userModalRef(component);
      resolve(this.ngbModalRef);
    });
  }

  userModalRef(component: Component): NgbModalRef {
    const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((result) => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
      this.ngbModalRef = null;
    }, (reason) => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
      this.ngbModalRef = null;
    });
    return modalRef;
  }
}
