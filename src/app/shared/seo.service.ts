import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  type Data,
} from '@angular/router';
import { filter, startWith } from 'rxjs';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'profile' | 'article';
  jsonLd?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly siteUrl = 'https://rossbryson.com';
  private readonly defaultImage = '/images/og-icon.png';
  private readonly siteName = 'Ross Bryson';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  initialize(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(null)
      )
      .subscribe(() => this.applyRouteSeo());
  }

  private applyRouteSeo(): void {
    const data = this.getDeepestRouteData(this.activatedRoute);
    const seo = data['seo'] as SeoData | undefined;

    if (!seo) {
      return;
    }

    const canonicalUrl = this.absoluteUrl(seo.path);
    const imageUrl = this.absoluteUrl(seo.image ?? this.defaultImage);

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({
      name: 'robots',
      content: seo.noIndex ? 'noindex, follow' : 'index, follow',
    });

    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({
      property: 'og:description',
      content: seo.description,
    });
    this.meta.updateTag({ property: 'og:type', content: seo.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: seo.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    this.setCanonicalUrl(canonicalUrl);
    this.setJsonLd(seo.jsonLd);
  }

  private getDeepestRouteData(route: ActivatedRoute): Data {
    let child = route;

    while (child.firstChild) {
      child = child.firstChild;
    }

    return child.snapshot.data;
  }

  private setCanonicalUrl(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setJsonLd(jsonLd?: Record<string, unknown>): void {
    const existing = this.document.getElementById('route-json-ld');

    if (!jsonLd) {
      existing?.remove();
      return;
    }

    const script = existing ?? this.document.createElement('script');
    script.id = 'route-json-ld';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(jsonLd);

    if (!existing) {
      this.document.head.appendChild(script);
    }
  }

  private absoluteUrl(path: string): string {
    if (path.startsWith('http')) {
      return path;
    }

    return `${this.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }
}
