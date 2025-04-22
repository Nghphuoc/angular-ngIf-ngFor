import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-component',
  imports: [CommonModule],
  templateUrl: './user-component.component.html',
})
export class UserComponentComponent  implements OnInit {
  ngOnInit(): void {
    console.log(this.user);
  }
  @Input({required: true}) user: any;
  @Input() checkOn = false;
  @Output() userChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  onClick() {
    this.checkOn = !this.checkOn;
    this.router.navigate(['home']);
    if (!this.checkOn) {
      this.router.navigate(['']);
    }
  }
}
