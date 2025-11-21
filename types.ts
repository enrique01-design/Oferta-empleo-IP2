export interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  mission: string;
  functions: string[];
  requirements: {
    min: string[];
    valued: string[];
    soft: string[];
  };
  benefits: string[];
  process: string[];
  contactEmail: string;
  deadline?: string;
  imageUrl: string;
  color: string;
}

export type ViewMode = 'list' | 'detail';