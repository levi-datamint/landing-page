export type Conference = {
  name: string;
  date: string;
  cta: string;
  location: string;
};

export type Speaker = {
  name: string;
  title: string;
  bio: string;
};

export const conference: Conference = {
  name: 'Datamint Conference 2026',
  date: 'September 12, 2026',
  cta: 'Apply Now',
  location: 'Remote (Online)',
};

export const speakers: Speaker[] = [
  {
    name: 'Avery Chen',
    title: 'Staff Engineer, Data Systems',
    bio: 'Building scalable data pipelines and developer-first tooling.',
  },
  {
    name: 'Maya Rodriguez',
    title: 'Product Lead, Developer Experience',
    bio: 'Designing conference sessions that ship real outcomes.',
  },
  {
    name: 'Noah Patel',
    title: 'Research Engineer',
    bio: 'Exploring practical AI workflows for production teams.',
  },
];

