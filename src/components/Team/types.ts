export type Social = {
  label: "github" | "linkedin" | "x" | "web";
  url: string;
};

export type TeamMember = {
  id?: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specialties?: string[];
  socials?: Social[];
};
