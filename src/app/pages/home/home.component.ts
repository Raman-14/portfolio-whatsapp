import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('scrollToElement', { static: false })
  scrollToElement!: ElementRef;

  message = 'hide-msg';

  handleClick(){
    this.message = 'show-msg';
   this.scrollElementIntoView(); 
  }
  private scrollElementIntoView() {
    const element = this.scrollToElement.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
