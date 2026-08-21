export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  featured: boolean;
  status: "Concluído" | "Em desenvolvimento";
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  visible: boolean;
};

export type Education = {
  course: string;
  institution: string;
  period: string;
  description: string;
  status?: "Cursando";
};

export type Certification = {
  name: string;
  institution: string;
  year: number;
  credential: string;
};
