import profileData from '@/data/profile.json';
import { ProfileData } from '@/types';

export function getProfileData(): ProfileData {
  return profileData as ProfileData;
}

export function getFeaturedProjects() {
  return profileData.projects.filter(project => project.featured);
}

export function getFeaturedBlogPosts() {
  return profileData.blog.filter(post => post.featured);
}

export function getAllBlogPosts() {
  return profileData.blog;
}

export function getBlogPostById(id: number) {
  return profileData.blog.find(post => post.id === id);
} 