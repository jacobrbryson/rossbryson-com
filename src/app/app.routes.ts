import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';

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
];
