import {booleanAttribute, Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() type?: string;
  @Input({transform: booleanAttribute}) includeSystem = false;

  data = signal({
    type: 'Test value'
  });
}
