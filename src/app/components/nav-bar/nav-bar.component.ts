import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  message = 'hide-msg';

  handleClick(){
    window.open('https://drive.google.com/file/d/1kXTQzxnFJ4ZFuaCHvc9OM0cloU6PjmNA/view?usp=drive_link', '_blank');
    this.message = 'show-msg';
    setTimeout(() => {
      this.message = 'hide-msg';
    }, 10000); // 10 seconds (10000 milliseconds)
  }
}
