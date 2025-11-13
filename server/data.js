// This file acts as a simple in-memory database.

let profileData = {
  name: "George David Tembo",
  bio: `Certified Computer Engineer with a passion for building elegant and efficient solutions. I specialize in full-stack development, with a strong foundation in both front-end and back-end technologies. \n\nMy journey in tech is driven by a desire to solve complex problems and create meaningful applications that impact users positively. I am a lifelong learner, always eager to explore new technologies and improve my skill set.`,
  imageUrl: "assets/profile.jpg"
};

let skillsData = [
  { id: '1', name: 'JavaScript (ES6+)', icon: 'code' },
  { id: '2', name: 'TypeScript', icon: 'code' },
  { id: '3', name: 'React & Next.js', icon: 'code' },
  { id: '4', name: 'Node.js & Express', icon: 'code' },
  { id: '5', name: 'Python & Django', icon: 'code' },
  { id: '6', name: 'HTML5 & CSS3', icon: 'code' },
  { id: '7', name: 'PostgreSQL', icon: 'database' },
  { id: '8', name: 'MongoDB', icon: 'database' },
  { id: '9', name: 'Docker', icon: 'tool' },
  { id: '10', name: 'AWS & GCP', icon: 'cloud' },
  { id: '11', name: 'Git & GitHub', icon: 'tool' },
  { id: '12', name: 'Arduino & Raspberry Pi', icon: 'hardware' },
];

let projectsData = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with user authentication, product catalog, shopping cart, and a secure checkout process. Built with the MERN stack.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    imageUrl: 'assets/project1.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React. Features real-time data updates and customizable charts.',
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'WebSockets'],
    imageUrl: 'assets/project2.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'IoT Smart Home Controller',
    description: 'A web application to control and monitor IoT devices in a smart home environment. Built with Raspberry Pi, Node.js, and a React Native mobile app.',
    technologies: ['React Native', 'Node.js', 'MQTT', 'Raspberry Pi'],
    imageUrl: 'assets/project3.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    id: '4',
    title: 'Smart Fish Pond System',
    description: 'An IoT-based system to automate and monitor a fish pond. Features include automatic feeding, pH level monitoring, and turbidity tracking, all accessible through a clean dashboard.',
    technologies: ['React', 'Node.js', 'IoT', 'Arduino'],
    imageUrl: 'assets/project_fish.jpg',
    liveUrl: '#',
    repoUrl: 'https://github.com/GeorgeDrift/Fish_feeding',
  },
  {
    id: '5',
    title: 'Music Addict App',
    description: 'A sleek and modern music streaming application with features like playlist creation, song queues, and a dynamic user interface for a seamless listening experience.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express'],
    imageUrl: 'assets/project_music.jpg',
    liveUrl: '#',
    repoUrl: '#',
  }
];

let galleryImagesData = [
    { id: '1', imageUrl: 'assets/profile.jpg', altText: 'Professional headshot' },
    { id: '2', imageUrl: 'assets/background.jpg', altText: 'Working on a project' },
    { id: '3', imageUrl: 'assets/gallery1.jpg', altText: 'My workspace' },
    { id: '4', imageUrl: 'assets/gallery2.jpg', altText: 'Code on screen' },
];

module.exports = {
    profileData,
    skillsData,
    projectsData,
    galleryImagesData
};