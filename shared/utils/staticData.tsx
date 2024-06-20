import { PersonalDetails, SocialMedia, Project } from './types';

export const PersonalDetailsObject: PersonalDetails = {
  name: 'Om Daryani',
  logo: '/images/logo.png',
  about:
    '"A fresher with experience", this line says exactly who he is. He is a software developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills stands him apart from the crowd.',
  socialMedia: [],
  work: {
    company: 'Team ERP',
    designation: 'Front-End Developer',
    logo: '/images/companies/00007.png'
  },
  resume: '',
  profile_img: '/images/bob.png',
  calendyUrl: ''
};

export const SocialMediaObject: SocialMedia[] = [
  {
    link: '',
    image_file: '/images/icons/mail.svg',
    alt_text: 'gmail'
  },
  {
    link: '',
    image_file: '/images/icons/linkedin.svg',
    alt_text: 'linkedin'
  },
  {
    link: '',
    image_file: '/images/icons/facebook.svg',
    alt_text: 'facebook'
  },
  {
    link: '',
    image_file: '/images/icons/github.svg',
    alt_text: 'github'
  },
  {
    link: '',
    image_file: '/images/icons/instagram.svg',
    alt_text: 'instagram'
  }
];

export const ProjectObject: Project[] = [
  {
    slug: '',
    tagline: '',
    description: '',
    img: '/images/projects/hall-booking.png',
    name: 'Hall Booking',
    tags: [''],
    github: 'https://github.com/realokd/Hall-booking-module',
    category: [''],
    featured: false,
    launch_video: '',
    url: ''
  },
  {
    slug: '',
    tagline: '',
    description: '',
    img: '/images/projects/innotech.png',
    name: 'InnoTech 22',
    tags: [''],
    github: 'https://github.com/shashwat2003/InnoTechWeb2K22',
    category: [''],
    featured: false,
    launch_video: '',
    url: ''
  }
];
