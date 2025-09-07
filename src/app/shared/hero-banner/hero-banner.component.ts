import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
  providers: [
    provideIcons({
      heroArrowRight,
    }),
  ],
})
export class HeroBannerComponent {
  heroName = 'Senior Developer';
  tagline = 'Full Stack | DB Admin | Cloud Architect';
  ctaButtonText = 'Explore My Work';
}
