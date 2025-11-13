
import { Profile, Project, GalleryImage } from '../types';

const API_BASE_URL = '/api';

const getAuthHeaders = (token: string) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
});

// Auth
export const login = async (username?: string, password?: string): Promise<{ token: string }> => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Login failed');
  return response.json();
};

// Profile
export const fetchProfile = async (): Promise<Profile> => {
  const res = await fetch(`${API_BASE_URL}/profile`);
  return res.json();
};
export const updateProfile = async (profileData: Profile, token: string): Promise<Profile> => {
  const res = await fetch(`${API_BASE_URL}/profile`, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(profileData)
  });
  return res.json();
};

// Projects
export const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${API_BASE_URL}/projects`);
  return res.json();
};
export const addProject = async (projectData: Omit<Project, 'id'>, token: string): Promise<Project> => {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(projectData)
  });
  return res.json();
};
export const deleteProject = async (id: string, token: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
};

// Gallery
export const fetchGallery = async (): Promise<GalleryImage[]> => {
  const res = await fetch(`${API_BASE_URL}/gallery`);
  return res.json();
};
export const addImage = async (imageData: Omit<GalleryImage, 'id'>, token: string): Promise<GalleryImage> => {
  const res = await fetch(`${API_BASE_URL}/gallery`, {
    method: 'POST',
    headers: getAuthHeaders(token),
    body: JSON.stringify(imageData)
  });
  return res.json();
};
export const deleteImage = async (id: string, token: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/gallery/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(token),
  });
};
