import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  skills: string;
}

interface JobExperience {
  title: string;
  company: string;
  location: string;
  dates?: string;
  overview: string;
  highlights: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  readonly personalInfo = {
    name: 'Jacob Ross Bryson',
    title: 'Software Engineering Manager | Technical Lead | Platform & Cloud Engineering',
    location: 'Troutman, North Carolina',
    phone: '803.804.1422',
    phoneHref: 'tel:+18038041422',
    email: 'jacobrbryson@gmail.com',
  };

  readonly summary = [
    'Engineering leader and hands-on technical architect with 20+ years of technology experience spanning enterprise software, cloud infrastructure, distributed systems, database engineering, and product development.',
    'Lead distributed engineering teams and architect cloud platforms supporting millions of managed devices and millions of daily data synchronization operations. Experienced designing and operating large-scale service architectures, enterprise integrations, and production-critical systems across Google Cloud Platform, Node.js, React, TypeScript, and PostgreSQL.',
    'Combine technical leadership and enterprise engineering discipline with an entrepreneurial approach to building software products, including independent SaaS applications, AI-powered experiences, and real-time interactive systems.',
  ];

  readonly skillCategories: SkillCategory[] = [
    { title: 'Engineering leadership', skills: 'Team leadership, mentoring, technical direction, roadmaps, delivery planning, code review, hiring, cross-functional collaboration' },
    { title: 'Architecture & development', skills: 'Node.js, JavaScript, TypeScript, React, Angular, REST APIs, service-oriented architecture, PostgreSQL, SQL, C#, PHP, Symfony' },
    { title: 'Cloud & platform', skills: 'Google Cloud Platform, Cloud Run, Cloud SQL, Cloud Build, Cloud Scheduler, IAM, Docker, AWS, Azure, CI/CD, observability' },
    { title: 'Data, reliability & security', skills: 'PostgreSQL administration, query optimization, migrations, production troubleshooting, OAuth, Auth0, SSO, RBAC, least privilege, SOC 2 support' },
    { title: 'Tools & practices', skills: 'Jira, Confluence, Git, GitHub, Agile delivery, technical documentation, automated testing, AI-assisted development and governance' },
  ];

  readonly professionalExperience: JobExperience[] = [
    {
      title: 'Senior Full Stack Developer - Tech Lead',
      company: 'Vivacity Tech PBC',
      location: 'Remote',
      dates: 'March 2024 – Present',
      overview: 'Lead a five-person software engineering team responsible for the Dream customer platform, serving approximately 2,500 customers and managing four million devices across a distributed cloud architecture.',
      highlights: [
        'Lead technical direction, architecture, delivery planning, code review, and mentoring for five engineers, coordinating with Product, QA, Design, Operations, IT, and business stakeholders.',
        'Architect and operate a distributed platform comprising approximately 50 services and five databases, integrating with a dozen external systems, including Google, NetSuite, Stripe, Auth0, HubSpot, and logistics providers.',
        'Designed and implemented a major Google telemetry synchronization capability supporting approximately two million daily syncs across a fleet of four million managed devices.',
        'Led migration of application infrastructure from Render to Google Cloud Platform, improving scalability while maintaining infrastructure costs through cost-conscious architecture, monitoring, and service-level objective (SLO) management.',
        "Designed the database architecture and implemented the majority of Dream's API functionality for the NetSuite-to-Dream integration, enabling enterprise data synchronization through middleware services.",
        'Lead PostgreSQL architecture and production-sensitive changes, including functions, views, indexes, triggers, permissions, migrations, data corrections, and query optimization across multiple environments.',
        'Guide platform security, reliability, and operational readiness, including IAM, role-based access controls, SOC 2 support, penetration-test remediation, production troubleshooting, and deployment practices.',
        'Help drive the Dream Open API initiative, defining integration workflows, authentication, usage controls, documentation, billing considerations, and production readiness.',
      ],
    },
    {
      title: 'Director of Web Development',
      company: 'Kincaid IT',
      location: 'Shawnee, Kansas · Remote',
      dates: 'September 2020 – March 2024',
      overview: 'Led development of cloud software that helps school districts securely manage and automate Google Workspace.',
      highlights: [
        'Directed a distributed team of nine developers, setting architecture, engineering practices, quality standards, project plans, and mentoring routines.',
        'Designed approximately 20 stateless Node.js services supporting millions of Google API requests per day, with horizontal scaling, centralized logging, and operational visibility.',
        'Managed Google Cloud infrastructure, including Cloud Run, Cloud Build, and Cloud SQL, and led Angular applications through multiple major version upgrades.',
        'Partnered with product and business stakeholders on requirements and delivery; worked directly with Google personnel on utilities for Google for Education and Grow with Google.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Lee’s Summit School District',
      location: 'Lee’s Summit, Missouri',
      dates: 'November 2017 – September 2020',
      overview: 'Built applications connecting district systems, databases, identity platforms, and third-party APIs.',
      highlights: [
        'Created PaymentCentral, an online payment and commerce platform processing approximately $1.2 million in student fees and transactions annually.',
        'Built eApply, EventTracker, and eScheduler for configurable applications, attendance and check-in, and scheduling integrated with the student information system.',
        'Architected MyLSR7, a centralized identity and single sign-on platform integrating LDAP, Google OAuth 2.0, and internal applications.',
      ],
    },
    {
      title: 'Web Developer & Email Marketing',
      company: 'Heels.com',
      location: 'Charlotte, North Carolina',
      dates: 'May 2015 – May 2018',
      overview: 'Developed and maintained e-commerce systems, integrations, infrastructure, and operational tooling.',
      highlights: [
        'Maintained AngularJS and PHP/MySQL applications and integrations with Amazon, Jet.com, PayPal, Google, CyberSource, and other platforms.',
        'Built inventory integration infrastructure for a dropship model and real-time synchronization with dozens of trading partners.',
        'Migrated content delivery from Akamai to Amazon S3 and MaxCDN, saving approximately $3,700 per month while maintaining service levels.',
        'Supported HTTPS and server migrations, recurring security and performance audits, and PCI-aligned remediation.',
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Burkett Burkett & Burkett CPAs, P.A.',
      location: 'West Columbia, South Carolina',
      dates: 'December 2012 – September 2014',
      overview: 'Managed infrastructure, user support, virtualization, disaster recovery, and systems operations for a multi-site accounting firm.',
      highlights: [
        'Supported more than 50 users across two locations and virtualized more than 20 physical servers with Microsoft Hyper-V.',
        'Migrated email from Exchange to Office 365 and reduced workstation deployment time from roughly four hours to 30 minutes with Windows Deployment Services.',
        'Managed backups, replication, disaster recovery, maintenance, and infrastructure upgrades.',
      ],
    },
  ];

  readonly education = {
    degree: 'Bachelor of Science, Information & Technology Management',
    institution: 'Darla Moore School of Business, University of South Carolina',
    location: 'Columbia, South Carolina',
    date: 'August 2007',
  };
}
