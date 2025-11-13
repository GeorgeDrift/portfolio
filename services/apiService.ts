import { Profile, Skill, Project, GalleryImage } from '../types';
import { PROFILE_DATA, SKILLS_DATA, PROJECTS_DATA, GALLERY_IMAGES_DATA } from '../constants';

// --- Instructions for Switching to a Live Backend ---
// 1. Make sure your backend server is running.
// 2. Comment out the "Mock API" lines in each function below.
// 3. Uncomment the "Real API" lines in each function.
// 4. Your app will now fetch data live from your server.

const API_BASE_URL = '/api'; // Vite proxy will handle this in a real setup

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchProfile = (): Promise<Profile> => {
  // --- Mock API ---
  return Promise.resolve(PROFILE_DATA);

  // --- Real API (Uncomment below to use) ---
  // return fetch(`${API_BASE_URL}/profile`).then(res => handleResponse<Profile>(res));
};

export const fetchSkills = (): Promise<Skill[]> => {
  // --- Mock API ---
  return Promise.resolve(SKILLS_DATA);
  
  // --- Real API (Uncomment below to use) ---
  // return fetch(`${API_BASE_URL}/skills`).then(res => handleResponse<Skill[]>(res));
};

export const fetchProjects = (): Promise<Project[]> => {
  // --- Mock API ---
  return Promise.resolve(PROJECTS_DATA);

  // --- Real API (Uncomment below to use) ---
  // return fetch(`${API_BASE_URL}/projects`).then(res => handleResponse<Project[]>(res));
};

export const fetchGallery = (): Promise<GalleryImage[]> => {
  // --- Mock API ---
  return Promise.resolve(GALLERY_IMAGES_DATA);

  // --- Real API (Uncomment below to use) ---
  // return fetch(`${API_BASE_URL}/gallery`).then(res => handleResponse<GalleryImage[]>(res));
};

// FIX: Add missing 'login' function to resolve import error in LoginModal.tsx.
export const login = (username?: string, password?: string): Promise<{ token: string }> => {
  // --- Mock API ---
  if (username === 'admin' && password === 'password') {
    return Promise.resolve({ token: 'mock-jwt-token' });
  }
  return Promise.reject(new Error('Invalid credentials!'));

  // --- Real API (Uncomment below to use) ---
  // return fetch(`${API_BASE_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, password }),
  // }).then(res => handleResponse<{ token: string }>(res));
};
