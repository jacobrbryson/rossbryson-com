import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Import RouterLink and RouterLinkActive
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBars3,
  heroDocumentText,
  heroFolder,
  heroPuzzlePiece,
  heroWrenchScrewdriver,
  heroXMark,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [
    provideIcons({
      heroDocumentText,
      heroFolder,
      heroWrenchScrewdriver,
      heroPuzzlePiece,
      heroBars3,
      heroXMark,
    }),
  ],
})
export class NavbarComponent {
  navLinks = [
    { label: 'Resume', path: '/resume', icon: 'heroDocumentText' },
    { label: 'Portfolio', path: '/portfolio', icon: 'heroFolder' },
    {
      label: 'Vivacity Tech',
      path: '/vivacity-tech',
      icon: 'heroWrenchScrewdriver',
    },
    {
      label: 'Orcwood Games',
      path: '/orcwood-games',
      icon: 'heroPuzzlePiece',
    },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
