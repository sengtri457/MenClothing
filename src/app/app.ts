import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'clothingMen';
}
