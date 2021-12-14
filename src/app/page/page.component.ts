import { Component } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/1.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/2.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/3.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/4.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/5.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/6.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/7.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/8.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/9.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ]

  constructor() { }
 
  ngOnInit() {}
    
}
