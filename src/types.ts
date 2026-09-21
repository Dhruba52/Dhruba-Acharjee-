export type SkillLevel = 'Exploring' | 'Learning' | 'Practicing' | 'Building';

export type SkillCategory = 'Engineering' | 'Technology' | 'Creative' | 'Management';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  iconName?: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Simulation' | 'Prototype';
  category: 'Robotics' | 'Biomedical / EEE' | 'Simulation' | 'Automation';
  date?: string;
  githubUrl?: string;
  simulationUrl?: string;
  demoVideoUrl?: string;
  documentationUrl?: string;
  highlights: string[];
  schematicDetails?: string;
}

export interface TimelineStage {
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Current' | 'Completed' | 'Future';
  achievements: string[];
  accentColor: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  highlights: string[];
  type: 'Leadership' | 'Club' | 'Initiative' | 'Volunteering' | 'Academic';
}

export interface CompetitionItem {
  id: string;
  title: string;
  event: string;
  type: string;
  year: string;
  description: string;
  status: string;
  badge?: string;
}

export interface HobbyItem {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  tactics: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  genre: string;
  note?: string;
  favoriteAspect?: string;
  vibeTag: string;
}

export interface EntertainmentCategory {
  category: string;
  icon: string;
  items: MediaItem[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  iconName: string;
}
