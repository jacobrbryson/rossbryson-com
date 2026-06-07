import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrcwoodGamesComponent } from './pages/orcwood-games/orcwood-games.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { VivacityTechComponent } from './pages/vivacity-tech/vivacity-tech.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ross Bryson | Senior Full-Stack Developer',
    data: {
      seo: {
        title: 'Ross Bryson | Senior Full-Stack Developer',
        description:
          'Ross Bryson is a senior full-stack developer specializing in Angular, Node.js, cloud architecture, database systems, and Unity game development.',
        path: '/',
        image: '/images/og-icon.png',
        type: 'profile',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ross Bryson',
          url: 'https://rossbryson.com/',
          jobTitle: 'Senior Full-Stack Developer',
          knowsAbout: [
            'Angular',
            'Node.js',
            'Google Cloud Platform',
            'Database Administration',
            'Unity',
            'Game Development',
          ],
          sameAs: ['https://orcwood.com/'],
        },
      },
    },
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Ross Bryson | Resume',
    data: {
      seo: {
        title: 'Ross Bryson | Software Engineer Resume',
        description:
          'Review Ross Bryson’s software engineering resume, including full-stack development, cloud architecture, database, leadership, and game development experience.',
        path: '/resume',
        image: '/images/profile.jpg',
        type: 'profile',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: 'Ross Bryson Software Engineer Resume',
          url: 'https://rossbryson.com/resume',
          about: {
            '@type': 'Person',
            name: 'Ross Bryson',
            jobTitle: 'Software Engineer',
          },
        },
      },
    },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Ross Bryson | Portfolio',
    data: {
      seo: {
        title: 'Ross Bryson | Full-Stack Developer Portfolio',
        description:
          'Explore Ross Bryson’s portfolio of Angular, Node.js, Google Cloud, database, WordPress, e-commerce, school technology, and Unity game projects.',
        path: '/portfolio',
        image: '/images/banner-square.jpg',
        type: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Ross Bryson Full-Stack Developer Portfolio',
          url: 'https://rossbryson.com/portfolio',
          description:
            'A portfolio of full-stack web applications, cloud platforms, database projects, e-commerce systems, and Unity games by Ross Bryson.',
        },
      },
    },
  },
  {
    path: 'vivacity-tech',
    component: VivacityTechComponent,
    title: 'Ross Bryson | Senior Developer at Vivacity Tech',
    data: {
      seo: {
        title: 'Ross Bryson | K-12 Technology Developer at Vivacity Tech',
        description:
          'Learn about Ross Bryson’s work building K-12 technology platforms, Chromebook lifecycle tools, Google for Education integrations, and asset management systems.',
        path: '/vivacity-tech',
        image: '/images/logo-v-white.png',
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Ross Bryson at Vivacity Tech',
          url: 'https://rossbryson.com/vivacity-tech',
          author: {
            '@type': 'Person',
            name: 'Ross Bryson',
          },
        },
      },
    },
  },
  {
    path: 'orcwood-games',
    component: OrcwoodGamesComponent,
    title: 'Ross Bryson | Owner of Orcwood Games',
    data: {
      seo: {
        title: 'Ross Bryson | Owner and Game Developer at Orcwood Games',
        description:
          'Learn about Ross Bryson’s work as owner of Orcwood Games, including Unity development, game studio leadership, product strategy, and published game projects.',
        path: '/orcwood-games',
        image: '/images/og-icon.png',
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Ross Bryson and Orcwood Games',
          url: 'https://rossbryson.com/orcwood-games',
          author: {
            '@type': 'Person',
            name: 'Ross Bryson',
          },
          about: {
            '@type': 'Organization',
            name: 'Orcwood Games',
            url: 'https://orcwood.com/',
          },
        },
      },
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found | Ross Bryson',
    data: {
      seo: {
        title: 'Page Not Found | Ross Bryson',
        description:
          'The page you requested could not be found. Return to Ross Bryson’s portfolio, resume, or project pages.',
        path: '/404',
        noIndex: true,
      },
    },
  },
];
