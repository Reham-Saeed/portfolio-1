export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType;
}