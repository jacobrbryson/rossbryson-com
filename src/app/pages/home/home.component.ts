import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core'; // For icons in the content
import {
  heroCodeBracket,
  heroCube,
  heroRocketLaunch,
} from '@ng-icons/heroicons/outline';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component'; // Import the hero banner

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, NgIconComponent], // Add HeroBannerComponent and NgIconComponent
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    provideIcons({
      heroCodeBracket,
      heroCube,
      heroRocketLaunch,
    }),
  ],
})
export class HomeComponent {}
