import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input');

  ngAfterContentInit() {
    console.log('CONTENT INIT');
    console.log(this.control());
  }

  onClick() {
    console.log('Control clicked');
    console.log(this.control());
  }
}
