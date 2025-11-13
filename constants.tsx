import { Profile, Skill, Project, GalleryImage } from './types';

// This file contains dummy data to be used by the mocked apiService.
// When you are ready to connect to a live backend, you can switch the
// implementation in `services/apiService.ts`.

export const PROFILE_DATA: Profile = {
  name: "George David Tembo",
  bio: `Certified Computer Engineer with a passion for building elegant and efficient solutions. I specialize in full-stack development, with a strong foundation in both front-end and back-end technologies. \n\nMy journey in tech is driven by a desire to solve complex problems and create meaningful applications that impact users positively. I am a lifelong learner, always eager to explore new technologies and improve my skill set.`,
  imageUrl: "assets/profile.jpg"
};

export const SKILLS_DATA: Skill[] = [
  { id: '1', name: 'JavaScript (ES6+)', icon: 'code' },
  { id: '2', name: 'php', icon: 'code' },
  { id: '3', name: 'React & Next.js', icon: 'code' },
  { id: '4', name: 'Node.js & Express', icon: 'code' },
  { id: '5', name: 'Python & Django', icon: 'code' },
  { id: '6', name: 'HTML5 & CSS3', icon: 'code' },
  { id: '7', name: 'PostgreSQL', icon: 'database' },
  { id: '8', name: 'MongoDB', icon: 'database' },
  { id: '9', name: 'java', icon: 'programming' },
  { id: '10', name: 'flutter', icon: 'Mobile Development' },
  { id: '11', name: 'Git & GitHub', icon: 'tool' },
  { id: '12', name: 'Arduino & Raspberry Pi', icon: 'hardware' },
];

export const PROJECTS_DATA: Project[] = [

  {
    id: '4',
    title: 'Smart Fish Pond System',
    description: 'An IoT-based system to automate and monitor a fish pond. Features include automatic feeding, pH level monitoring, and turbidity tracking, all accessible through a clean dashboard.',
    technologies: ['React', 'Node.js', 'IoT', 'Arduino'],
    imageUrl: 'assets/fish_feeding.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/GeorgeDrift/Fish_feeding',
  },
  {
    id: '5',
    title: 'Music Addict App',
    description: 'A sleek and modern music streaming application with features like playlist creation, song queues, and a dynamic user interface for a seamless listening experience.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express'],
    imageUrl: 'assets/music_addict.png',
   
  }
];

export const GALLERY_IMAGES_DATA: GalleryImage[] = [
    { id: '1', imageUrl: 'assets/profile.jpg', altText: 'Professional headshot' },
    { id: '2', imageUrl: 'assets/background.jpg', altText: 'Working on a project' },
    { id: '3', imageUrl: 'assets/gallery1.jpg', altText: '' },
    { id: '4', imageUrl: 'assets/gallery2.jpg', altText: '' },
    { id: '5', imageUrl: 'assets/gallery3.jpg', altText: '' },
    { id: '6', imageUrl: 'assets/gallery4.Png', altText: '' },
    { id: '7', imageUrl: 'assets/gallery5.jpg', altText: '' },
    { id: '8', imageUrl: 'assets/gallery6.jpg', altText: 'Code on screen' },
    { id: '9', imageUrl: 'assets/gallery7.jpg', altText: 'My workspace' },
    { id: '10', imageUrl: 'assets/gallery8.jpg', altText: 'Code on screen' },
    { id: '11', imageUrl: 'assets/gallery11.jpg', altText: 'My workspace' },
    { id: '12', imageUrl: 'assets/gallery12.jpg', altText: 'Code on screen' },
];