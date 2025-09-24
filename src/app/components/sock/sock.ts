import { Component, inject } from '@angular/core';
import { AcServices } from '../../services/ac-services';
import { SockCard } from '../sock-card/sock-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-sock',
  imports: [SockCard, CategoryPillsComponent],
  templateUrl: './sock.html',
  styleUrl: './sock.css',
})
export class Sock {
  sock = inject(AcServices);
  Socks = this.sock.getAllSock();
  categories = this.sock.getSockCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Socks = this.sock.getSockByCategory(c);
  }
}
