import {Component, Input} from '@angular/core';

type Task = { summary: string; dueDate: string; id: string; title: string; userId: string; };

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
