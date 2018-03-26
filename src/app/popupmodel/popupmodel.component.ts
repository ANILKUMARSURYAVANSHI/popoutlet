import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popupmodel',
  templateUrl: './popupmodel.component.html',
  styleUrls: ['./popupmodel.component.css']
})
export class PopupmodelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeModal($event) {
    this.router.navigate([{ outlets: { modal: null } }]);
  }

}
