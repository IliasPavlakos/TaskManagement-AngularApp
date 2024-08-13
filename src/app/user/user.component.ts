import {Component, computed, EventEmitter, input, Input, Output, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  name = input.required<string>();
  avatar = input.required<string>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.id)
  }
}
