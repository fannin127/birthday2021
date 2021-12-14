import { Component } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { Loader, LoaderOptions } from 'google-maps';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/images/1.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/2.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/3.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/4.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/5.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/6.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/7.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/8.webp', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/images/9.webp', backgroundSize: 'contain', backgroundPosition: 'center' }
  ]

  constructor() { }

  map: google.maps.Map;

  ngOnInit() {
    const options: LoaderOptions = {/* todo */ };
    const loader = new Loader('AIzaSyBL5XAvG63vFI_iy09RI0NC7hT00EweICg', options);

    loader.load().then(function (google) {
      const myLatLng = { lat: 50.66964637983779, lng: -2.5338292230830657 };

      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.66964637983779, lng: -2.5338292230830657 },
        zoom: 12,
      });

      new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      });
    });
  }
}
