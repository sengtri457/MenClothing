import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-pills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-pills.component.html',
})
export class CategoryPillsComponent {
  @Input() categories: string[] = [];
  @Input() active: string = 'All';
  @Output() change = new EventEmitter<string>();
}
