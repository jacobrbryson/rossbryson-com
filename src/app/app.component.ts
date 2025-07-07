import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Portfolio';
  currentDate = new Date(); // <-- Add this line
}
