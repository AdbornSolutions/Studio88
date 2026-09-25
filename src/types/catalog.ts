export type NavItem = {
  label: string;
  href: string;
  mega?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export type MegaCategory = {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
  items: LinkItem[];
};

export type Collection = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

export type Stone = {
  id: string;
  name: string;
  origin: string;
  description: string;
  finishes: string[];
  image: string;
  alt: string;
};

export type Origin = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
};

export type MaterialVariety = {
  name: string;
  origin: string;
  finish: string;
  thickness: string;
};

export type Material = {
  id: string;
  name: string;
  summary: string;
  image: string;
  alt: string;
  varieties: MaterialVariety[];
};

export type Tile = {
  id: string;
  name: string;
  category: string;
  size: string;
  finish: string;
  image: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  location: string;
  type: string;
  year: string;
  materials: string;
  image: string;
  alt: string;
};

export type Principle = {
  title: string;
  detail: string;
};