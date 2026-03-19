import { Component, afterNextRender, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LocationsService } from '@shared/services/locations.service';

@Component({
  selector: 'app-locations',
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export default class LocationsComponent {
  private locationService = inject(LocationsService);

  $origin = signal('');

  constructor() {
    afterNextRender(() => {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        this.$origin.set(origin);
      });
    });
  }

  locationsResource = rxResource({
    request: () => ({ origin: this.$origin() }),
    loader: ({ request }) => {
      const origin = request.origin;
      return this.locationService.getLocations(origin);
    },
  });
}
