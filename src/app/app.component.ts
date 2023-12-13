import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnitsRequest } from '../../proto/tracking.pb';
import { TrackingServiceClient } from '../../proto/tracking.pbsc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private trackingServiceClient: TrackingServiceClient,
  ) { }

  ngOnInit(): void {
    this.trackingServiceClient.units(new UnitsRequest()).subscribe(response => {
      console.log(response);
    });
  }

}
