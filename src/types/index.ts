export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  features: string[];
  trustBadges: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}