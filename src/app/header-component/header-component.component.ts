import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-component',
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
})
export class HeaderComponentComponent {

  showMenu = false;
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.visible = !this.visible;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  offShow(){
    this.visible = !this.visible;
  }

}
