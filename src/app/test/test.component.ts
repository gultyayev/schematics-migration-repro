import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() type?: string;

  data = signal({
    type: 'Test value'
  });
}
