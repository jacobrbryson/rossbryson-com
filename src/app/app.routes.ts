import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrcwoodGamesComponent } from './pages/orcwood-games/orcwood-games.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { VivacityTechComponent } from './pages/vivacity-tech/vivacity-tech.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ross Bryson | Digital Blueprint',
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Ross Bryson | Resume',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Ross Bryson | Portfolio',
  },
  {
    path: 'vivacity-tech',
    component: VivacityTechComponent,
    title: 'Ross Bryson | Senior Developer at Vivacity Tech',
  },
  {
    path: 'orcwood-games',
    component: OrcwoodGamesComponent,
    title: 'Ross Bryson | Owner of Orcwood Games',
  },
  { path: '**', redirectTo: '' },
];
