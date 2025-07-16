import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  PortfolioFilter,
  PortfolioFilterComponent,
} from './portfolio-filter/portfolio-filter.component';

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  integrations: string[];
  projectDate: Date;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true, // Make sure standalone is true
  imports: [PortfolioFilterComponent, DatePipe], // 2. Add DatePipe here
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  allProjects: PortfolioProject[] = [
    {
      id: 1,
      title: 'Admin+ Google Workspace Manager',
      description:
        'Led the development of a management tool for Google Workspace admins. Built on a modern stack hosted on Google Cloud Platform, the app integrates heavily with numerous Google APIs.',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MySQL',
        'Google Cloud Platform',
      ],
      integrations: [
        'Google Workspace APIs',
        'Google Cloud SQL',
        'Google Cloud Run',
      ],
      projectDate: new Date('2022-06-01'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Admin+',
      liveUrl: 'https://admin-plus.trafera.app',
    },
    {
      id: 2,
      title: 'Heels.com E-Commerce Platform',
      description:
        'Supported a large-scale e-commerce site handling 20,000 daily visitors. My role focused on the PHP backend, database management, and third-party marketplace API integrations.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      integrations: ['Amazon API', 'Jet.com API', 'Akamai CDN'],
      projectDate: new Date('2018-01-15'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=Heels.com',
      liveUrl: 'https://heels.com',
    },
    {
      id: 3,
      title: 'Loudoun Empty Bowls Check-in App',
      description:
        'Created a server-rendered check-in app for a charity fundraiser. Uniquely uses Google Sheets as its data store, allowing stakeholders to easily view and manage raw data.',
      technologies: ['Node.js', 'EJS', 'Google Cloud Platform'],
      integrations: ['Google Sheets API'],
      projectDate: new Date('2023-10-01'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Check-in+App',
      liveUrl: 'https://checkin.loudounemptybowls.org/',
    },
    {
      id: 4,
      title: 'New America (Game)',
      description:
        "A multiplayer remake of the classic 1993 game 'Project Visitor,' featuring a modern game client and a custom backend for multiplayer services hosted on GCP.",
      technologies: ['Unity', 'C#', 'Node.js', 'Express', 'MySQL', 'GCP'],
      integrations: ['Photon Engine', 'Steamworks API'],
      projectDate: new Date('2025-07-15'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=New+America',
      liveUrl: 'https://store.steampowered.com/app/1594280/New_America',
    },
    {
      id: 5,
      title: 'Payment Central',
      description:
        'Developed a custom payment processing app for a school district, handling over $2 million in student fees annually through a secure integration with the MySchoolBucks API.',
      technologies: ['ColdFusion', 'SQL Server', 'HTML', 'CSS'],
      integrations: ['MySchoolBucks API'],
      projectDate: new Date('2019-08-01'),
      imageUrl:
        'https://placehold.co/600x400/1e293b/ffffff?text=Payment+Central',
      liveUrl: 'https://paymentcentral.lsr7.org/?store',
    },
    {
      id: 6,
      title: 'Cabin Escape (Game)',
      description:
        'Developed and published a puzzle-based mystery game on the Steam store. Built entirely within the Unity game engine using C#.',
      technologies: ['Unity', 'C#'],
      integrations: ['Steamworks API'],
      projectDate: new Date('2024-05-20'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=Cabin+Escape',
      liveUrl: 'https://store.steampowered.com/app/3150770/Cabin_Escape/',
    },
    {
      id: 7,
      title: 'Orcwood Games Website',
      description:
        'The main website for the Orcwood game studio, built with the Ionic framework for a cross-platform mobile and web experience.',
      technologies: ['Ionic', 'Angular', 'TypeScript'],
      integrations: [],
      projectDate: new Date('2023-01-01'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Orcwood.com',
      liveUrl: 'https://orcwood.com/',
    },
    {
      id: 8,
      title: 'g2t.app',
      description:
        'A full-stack web application built with Angular and a Node.js Express backend, demonstrating practical application of a modern web stack.',
      technologies: ['Angular', 'Node.js', 'Express', 'MySQL'],
      integrations: [],
      projectDate: new Date('2021-05-15'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=g2t.app',
      liveUrl: 'https://g2t.app/',
    },
    {
      id: 9,
      title: 'Kate Ferguson - Author Site',
      description:
        'A professional website for an author, built on the Symfony PHP framework to manage content and provide information to readers.',
      technologies: ['Symfony PHP', 'MySQL', 'HTML/CSS'],
      integrations: [],
      projectDate: new Date('2020-01-01'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Kate+Ferguson',
      liveUrl: 'https://kate-ferguson.com/',
    },
    {
      id: 10,
      title: 'Loudoun Empty Bowls - Charity Site',
      description:
        'The main public-facing website for the Loudoun Empty Bowls charity, built on WordPress for easy content management by the organization.',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      integrations: [],
      projectDate: new Date('2019-01-01'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=LEB.org',
      liveUrl: 'https://loudounemptybowls.org/',
    },
  ];

  // You'll also need to get the unique values for the dropdowns
  uniqueTechStacks: string[] = [];
  uniqueTechnologies: string[] = [];
  uniqueIntegrations: string[] = [];

  ngOnInit() {
    this.uniqueTechnologies = [
      ...new Set(this.allProjects.flatMap((p) => p.technologies)),
    ];
    this.uniqueIntegrations = [
      ...new Set(this.allProjects.flatMap((p) => p.integrations)),
    ];
  }

  // You will use this method in the parent component's template
  onFilterChanged(filters: PortfolioFilter) {
    console.log('Filters received from child:', filters);
    // Next, we will implement the logic to filter `allProjects`
  }
}
