import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core'; // Don't forget to import NgIconComponent
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, NgIconComponent], // Include NgIconComponent if you plan to use icons in the button
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
  providers: [
    provideIcons({
      heroArrowRight,
    }),
  ],
})
export class HeroBannerComponent {
  // You can define properties here if needed, e.g., for dynamic content
  heroName = 'Ross Bryson ';
  tagline = 'Full Stack Developer | Game Enthusiast'; // Customize your tagline
  ctaButtonText = 'Explore My Work';
}
