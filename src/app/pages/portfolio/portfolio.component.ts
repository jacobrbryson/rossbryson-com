import { Component, OnInit } from '@angular/core';
import {
  PortfolioFilter,
  PortfolioFilterComponent,
} from './portfolio-filter/portfolio-filter.component';

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  techStack: 'MEAN' | 'MERN' | 'MEVN' | 'Serverless' | 'Custom';
  technologies: string[];
  integrations: string[];
  projectDate: Date;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
@Component({
  selector: 'app-portfolio',
  imports: [PortfolioFilterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  allProjects: PortfolioProject[] = [
    {
      id: 1,
      title: 'Enterprise CRM Dashboard',
      description:
        'A real-time analytics dashboard for a major CRM platform, providing insights into sales and customer engagement metrics.',
      techStack: 'MEAN',
      technologies: [
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'D3.js',
        'TypeScript',
      ],
      integrations: ['Salesforce', 'Stripe', 'SendGrid'],
      projectDate: new Date('2024-01-15'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=CRM+Dashboard',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description:
        'A full-featured e-commerce site with product management, shopping cart, and secure checkout functionalities.',
      techStack: 'MERN',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      integrations: ['Stripe', 'PayPal', 'Shippo'],
      projectDate: new Date('2023-05-20'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=E-commerce',
    },
    {
      id: 3,
      title: 'Serverless API for Mobile App',
      description:
        'A highly scalable, serverless backend using AWS Lambda and API Gateway to support a high-traffic mobile application.',
      techStack: 'Serverless',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Node.js'],
      integrations: ['Firebase Auth', 'AWS S3'],
      projectDate: new Date('2023-11-01'),
      imageUrl:
        'https://placehold.co/600x400/1e293b/ffffff?text=Serverless+API',
    },
    {
      id: 4,
      title: 'Vue.js Project Management Tool',
      description:
        'A collaborative project management tool inspired by Trello, built with the MEVN stack.',
      techStack: 'MEVN',
      technologies: ['Vue.js', 'Express', 'Node.js', 'MongoDB', 'Vuex'],
      integrations: ['Google Drive', 'Slack'],
      projectDate: new Date('2022-08-10'),
      imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=Project+Tool',
    },
    {
      id: 5,
      title: 'Custom Headless CMS',
      description:
        'A custom-built headless CMS to manage content across multiple web and mobile clients, featuring a flexible content modeling system.',
      techStack: 'Custom',
      technologies: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'GraphQL',
        'TypeScript',
      ],
      integrations: ['Auth0', 'Cloudinary'],
      projectDate: new Date('2024-03-30'),
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Headless+CMS',
    },
  ];

  // You'll also need to get the unique values for the dropdowns
  uniqueTechStacks: string[] = [];
  uniqueTechnologies: string[] = [];
  uniqueIntegrations: string[] = [];

  ngOnInit() {
    this.uniqueTechStacks = [
      ...new Set(this.allProjects.map((p) => p.techStack)),
    ];
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
