import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define interfaces for better type safety and structure
interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin?: string; // Optional
  github?: string; // Optional
}

interface SkillCategory {
  title: string;
  skills: string; // Storing as a single string for now, can be array if needed
}

interface Success {
  description: string;
}

interface JobExperience {
  title: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  // Personal Information
  personalInfo: PersonalInfo = {
    name: 'JACOB ROSS BRYSON',
    title: 'Software Engineer | Senior Web Developer',
    location: 'Troutman, North Carolina',
    phone: '803.804.1422',
    email: 'jacobrbryson@gmail.com',
  };

  // Programming Technology Expertise
  programmingSkills: string =
    'HTML, CSS, Bootstrap, Javascript, Node.js, React, Angular, C#, Unity, PHP, Symfony, Apache, MySQL, MS SQL, Postgres';

  // Additional Technology Expertise
  additionalSkills: string =
    'Amazon AWS, Microsoft Azure, Google Cloud Platform, Wordpress, SEO, RESTful APIs, JIRA, GIT, Docker, Server Management & Virtualization';

  // Summary of Qualifications
  summaryQualifications: string[] = [
    'Over 20 years of Information & Technology Industry experience in different business sectors, including manufacturing, education, financial, and e-commerce',
    'Nine years of experience as a full time Web Developer and three years leading a team of developers',
    'Currently the Director of Web Development for a Google for Education Partner',
    'Over three years experience working 100% remotely while managing large projects and working with a team',
    'As the Director of Web Development, oversaw all design application infrastructure architecture designs',
    'Over three years experience utilizing project management tools such as JIRA, Confluence, and Google Cloud Platform',
    'During career, designed, built, and implemented many scalable, enterprise level applications',
    'Frequently complimented for communicating technical details and solutions to the user at their own level',
    'Very detail oriented and a firm believer in documentation',
    'Expert problem solver and thrives on challenges',
  ];

  // Selected Successes
  selectedSuccesses: Success[] = [
    {
      description:
        'Managed the development team and primary contributor for the application Admin+ by Kincaid IT. This application integrates with Google Workspace via a variety of Google APIs. The application supports automation within Google Workspace, granular Google Drive storage management, and Google Workspace Device management',
    },
    {
      description:
        'Worked directly with Google employees to create utilities and services to assist Google with Google for Education and Grow with Google programs',
    },
    {
      description:
        'Built a payment processing application that integrates with on-prem software solutions as well as multiple third-party integrations. Application processes $1.2 million dollars in items and fees annually',
    },
    {
      description:
        'Migrated dozens of inhouse username/password logins to single sign-on with Google oAuth',
    },
    {
      description:
        'Migrated Heels.com’s CDN (Content Delivery Network) from Akamai to AWS/MaxCDN. 360 terabytes of images, the change saved the business $3700 a month',
    },
    {
      description:
        'Integrated Heels.com with Jet.com and enhanced integration and product listings on Amazon.com',
    },
  ];

  // Professional Experience
  professionalExperience: JobExperience[] = [
    {
      title: 'Director of Web Development',
      company: 'Kincaid IT',
      location: 'Shawnee, KS (fully remote)',
      dates: 'Sept 2020 – Now',
      responsibilities: [
        'Directed a team of 9 developers to design, deploy, and maintain several applications that focus on providing solutions for school districts to operate more securely and efficiently within Google Workspace',
        'Designed the backend services that allow various applications to make millions Google API requests a day as efficiently as possible, securely, and with thorough logging for debugging purposes',
        'Designed the backend services to be an ecosystem of 20 stateless Node.js microservices - which we refer to as KIT Central',
        'Each service is instanced and multiple instances can be spun up automatically to handle increased workloads on back-end services',
        'Infrastructure is managed with Google Cloud Platform - Run, Build, SQL, and Repositories',
        'Front-end applications are built in Angular, upgraded from 10 - 15 during the lifetime of the projects.',
        'Used JIRA and Confluence for project management and documentation',
        'Managed and enforced team coding standards, workflows, and other policies',
        'Assisted team members with creating SOLID test driven code through peer-programming, training, and code reviews',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Lee’s Summit School District',
      location: 'Lee’s Summit, MO (some remote)',
      dates: 'Nov 2017 – Sept 2020',
      responsibilities: [
        'All applications created for the district integrate with the District’s on-prem databases and various third party APIs',
        'Created application PaymentCentral - A payment processing application that processes student fees and includes an online store. The application processes $1.2 million in sales annually.',
        'Created application eApply - A form building application that allows students, employees, and the public to apply for various activities that the district offers',
        'Created application EventTracker - An application that allows users to configure and set up kiosks for staff and students to check-in to physical locations using their school IDs. Events/areas such as school dances, lunch/recess facilities, and libraries',
        'Created application eScheduler - A calendar application that integrates directly with the district’s SIS (Student Information System) and allows for the scheduling of services such as parent teacher conferences, exams, and other activities',
        'Created an attendance application that checks the IP address of the connected client for students taking classes off campus (college courses) - students were required to connect to the college wifi and sign in.',
        "Created application MyLSR7 (SSO) - Set of services to create a more secure, fluid, and single sign on for authentication. The application provides a central user account management area for staff, student, third party, and public accounts. The process integrates with LDAP, Google oAuth2, and the district's other user management services",
      ],
    },
    {
      title: 'Web Developer and Email Marketing',
      company: 'Heels.com',
      location: 'Charlotte, NC (some remote)',
      dates: 'May 2015 – May 2018',
      responsibilities: [
        'Update/maintain Heels’ AngularJS frontend and PHP/MySQL backend, with Kohana as the PHP framework.',
        'Integrate, update, and maintain third party API connections with companies like Amazon.com, Jet.com, Paypal.com, Google.com, Cybersource.com, & others',
        "Designed, built, and deployed an application interface critical to Heels.com's new Dropship business model. The interface changed the entire way the company’s inventory is managed and updates the business’s inventory in real time with dozens of trading partners",
        'Moved Heels.com from http to https and migrated all web servers from CentOS to RHEL',
        'Successfully migrated Heels.com’s content delivery from Akamai to a hybrid Amazon S3 and MaxCDN, saving the business $3,700/mo for the same level of service',
        'Follow PCI and general security best practices to update code, servers, and network infrastructures as recommended by vulnerability scan results',
        'Design and/or optimize e-commerce features such as templates, checkout flow, order management tools, or recommend third-party solutions',
        'Monthly security, server, and application performance audits',
        'Develop automated systems for commerce, reporting, and third party integration',
        'Facilitate social media integration like building out a shoppable instagram feed',
        'Build company transactional emails, monitor click-rates, conversions, and contact loss',
        'Develop strategies for gaining new leads',
        'Assist marketing team in the development and deployment of new campaigns',
        'Perform many help desk duties including but not limited to desktop support and networking',
        'Provide network layout and security documentation to businesses who sublease space from Heels in order for the businesses to provide documentation to their clients',
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Burkett Burkett & Burkett CPAs, P.A.',
      location: 'West Columbia, SC',
      dates: 'December 2012 - September 2014',
      responsibilities: [
        "Managed the firm’s helpdesk, supporting over 50 end-user's at two sites",
        'Oversaw the firm’s terminal, gateway, and production servers',
        'Converted over 20 physical servers to virtual machines (Hyper-V)',
        'Migrated employee email accounts from Exchange 2013 to Office 365',
        'Reduced desktop and laptop deployment times from 4 hours to approximately 30 minutes using Windows Deployment Services',
        'Implemented and managed much of the firm’s disaster recovery practices',
        'Managed replication of virtual machines between sites',
        'Supported desktops, Surfaces, iPads, and end-user’s personal devices as well as back-of-the-house hardware such as routers, switches, servers, and cabling',
        'Scheduled outages for application maintenance, oversaw application upgrades and maintenance',
        'Responsible for the firm’s data backups, both tape and disk',
        'Responsible for troubleshooting applications within the firm to correct and report bugs within applications',
      ],
    },
  ];

  // Education
  education: Education[] = [
    {
      degree:
        'Bachelor’s of Science in Information and Technologies Management',
      institution:
        'Darla Moore School of Business - University of South Carolina',
      location: 'Columbia, SC',
      date: 'August 2007',
    },
  ];
}
