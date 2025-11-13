
export interface Profile {
  name: string;
  bio: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  altText: string;
}
