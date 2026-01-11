import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'Accessory/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'track/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'hoodie/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'jacket/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'running/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'basketball/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'lifestyle/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'hat/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'sock/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'clothing/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'bag/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'shoes/:id',
    renderMode: RenderMode.Client,
  },
];
