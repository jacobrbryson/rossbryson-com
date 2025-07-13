/*
  File: src/app/portfolio/portfolio-filter/portfolio-filter.component.ts
  Description: This component handles the filtering logic for the portfolio page.
*/

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

export interface PortfolioFilter {
  techStack: string;
  technology: string;
  integration: string;
  age: number; // in years, 0 for all
  searchTerm: string;
}

@Component({
  selector: 'app-portfolio-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './portfolio-filter.component.html',
  styleUrls: ['./portfolio-filter.component.css'],
  providers: [provideIcons({ heroMagnifyingGlass })],
})
export class PortfolioFilterComponent {
  @Input() techStacks: string[] = [];
  @Input() technologies: string[] = [];
  @Input() integrations: string[] = [];

  @Output() filterChange = new EventEmitter<PortfolioFilter>();

  filters: PortfolioFilter = {
    techStack: 'all',
    technology: 'all',
    integration: 'all',
    age: 0,
    searchTerm: '',
  };

  onFilterChange(): void {
    // When a filter changes, emit the current filters object.
    // A debounce here in a real-world scenario would be ideal for the search term.
    this.filterChange.emit(this.filters);
  }
}
