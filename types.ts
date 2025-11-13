
export interface Profile {
  name: string;
  bio: string;
  imageUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string; // Icon identifier (e.g., 'code', 'database')
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  prompt?: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  altText: string;
}
