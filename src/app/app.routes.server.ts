import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'resume',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'portfolio',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'vivacity-tech',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'orcwood',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'orcwood-games',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404
  },
];
