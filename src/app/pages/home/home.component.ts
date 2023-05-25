import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2) {}
  

  message = 'hide-msg';

  handleClick(){
    this.message = 'show-msg';
    setTimeout(() => {
      this.scrollElementIntoView();
    }, 0);
  }
  private scrollElementIntoView() {
    const element = document.getElementById('body-row-4'); // Replace with the actual ID of the element you want to scroll to
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
