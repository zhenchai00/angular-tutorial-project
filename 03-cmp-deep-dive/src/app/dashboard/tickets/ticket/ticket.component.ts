import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  data = input.required<Ticket>({});
  close = output();
  detailsVisible = signal(false);


  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((visible) => !visible);
  }

  onMarkAsClosed() {
    this.close.emit();
  }
}
