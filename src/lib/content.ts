/** Shown under the lab name on the home splash and in the header tagline area. */
export const labTagline =
  "Graphene Nanomaterials • Next Generation Batteries • Circular Economy • Energy Materials";

export const site = {
  name: "Nanjundan Lab",
  tagline: labTagline,
  address: [
    "University of Southern Queensland",
    "37 Sinnathamby Boulevard",
    "Springfield Central QLD 4300",
  ],
  email: "ashok.nanjundan@unisq.edu.au",
  /** Extra inboxes that receive the same contact form email as `email` (Resend `to`). Omit or leave empty for PI only. */
  contactFormAdditionalRecipients: ["sohil.ganeshbabu@unisq.edu.au"],
  phone: "+61 7 3470 4534",
};

export const labBrand = {
  title: "Nanjundan Lab",
  subtitle: labTagline,
} as const;

/** Logos in /public/funding/ — replace files to update artwork. */
export const fundingPartners = [
  {
    name: "Australian Research Council",
    src: "/funding/arc.png",
    href: "https://www.arc.gov.au/",
    width: 1382,
    height: 311,
  },
  {
    name: "University of Southern Queensland",
    src: "/funding/unisq.png",
    href: "https://www.unisq.edu.au/",
    width: 1205,
    height: 602,
  },
] as const;

export const principalInvestigator = {
  name: "Prof. Ashok Kumar Nanjundan",
  title: "Professor of Energy Storage",
  affiliations: [
    "University of Southern Queensland",
    "Honorary Professor, The University of Queensland",
  ],
  bio: "Prof. Ashok Kumar Nanjundan is a nanomaterials and energy expert focused on advanced carbon materials, clean-energy materials, and electrochemical energy storage. His work bridges fundamental materials chemistry with translational technologies and industry-facing applications.",
  bioExtended:
    "He has held international fellowships (including Marie-Curie and JSPS), contributed to 100+ publications and multiple patents, and mentors emerging researchers across materials science and energy conversion.",
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=p6EhiTkAAAAJ",
    universityBio: "https://research.usq.edu.au/researcher/z1045/prof-ashok-nanjundan",
    orcid: "https://orcid.org/0000-0001-6502-0844",
    linkedin: "https://www.linkedin.com/in/ashok-kumar-nanjundan/",
  },
  keywords: [
    "Advanced carbon materials",
    "Inorganic materials chemistry",
    "Clean energy materials",
    "Energy storage",
  ],
};

/** Homepage section copy (keep lines short—the first screen is only the centered title). */
export const homeCopy = {
  piEyebrow: "Principal investigator",
  researchEyebrow: "Research",
  researchTitle: "Themes",
  projectsEyebrow: "Projects",
  projectsTitle: "Active work",
  contactTitle: "Get in touch",
  contactDescription: "Students, collaborators, and partners can send a message to the lab team.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/** Sub-links under the Team nav dropdown. */
export const principalInvestigatorId = "nanjundan" as const;

export const teamNavDropdown = [
  { href: `/team/${principalInvestigatorId}`, label: "Chief investigator" },
  { href: "/team/current", label: "Current team" },
  { href: "/team/alumni", label: "Alumni" },
] as const;

export type TeamGroup = "pi" | "current" | "alumni";

export const highlights = [
  {
    title: "Advanced carbon & hybrid materials",
    body: "Graphene and MOF-derived carbons, heterostructures, and tunable nanoarchitectures for electrochemical interfaces.",
  },
  {
    title: "Batteries, supercapacitors & storage",
    body: "Next-generation electrodes, electrolytes, solid-state concepts, and performance metrics from lab to prototype scale.",
  },
  {
    title: "Clean energy & translation",
    body: "Industry-facing R&D, device integration, and mentoring the next generation of materials and energy researchers.",
  },
];

const piMembers = [
  {
    id: "nanjundan",
    group: "pi" as const,
    name: "Prof. Ashok Kumar Nanjundan",
    role: "Professor of Energy Storage",
    focus: "Nanomaterials (carbon) · energy storage · clean energy",
    bio: "Prof. Ashok Kumar Nanjundan is a nanomaterial (carbon) and energy expert and a former Chief Scientific Officer at a listed company in graphene production and applications. His research has been recognized through prestigious fellowships including Marie-Curie, JSPS-Japan, and UQ Fellowship, and has attracted several million AUD in funding. He has published over 100 papers and filed seven patents in nanomaterials and energy, with work appearing in journals such as Chemical Review, ACS Nano, Advanced Energy Materials, Energy & Environmental Science, Nature Protocols, and Chemical Communications.",
    photo: "/team/prof-ashok.png",
    email: "ashok.nanjundan@unisq.edu.au",
    scholar: "https://scholar.google.com/citations?hl=en&user=p6EhiTkAAAAJ",
    orcid: "https://orcid.org/0000-0001-6502-0844",
  },
] as const;

const currentTeamMembers = [
  {
    id: "annamalai",
    group: "current" as const,
    name: "Dr. Pratheep K. Annamalai",
    role: "Post doctoral fellow",
    focus: "Sustainable materials · circular polymers · translational research",
    bio: "Dr. Pratheep K. Annamalai is a polymer and nanomaterials scientist interested in engineering materials for sustainable living. He has extensive expertise in both translational and fundamental research. His interests include valorizing crops and food waste into nanomaterials, reactive building blocks, and carbon materials for engineering applications and advanced devices. He currently leads circular polymer products research at UniSQ.",
    photo: "/team/pratheep-kumar-annamalai.png",
    email: "pratheep.annamalai@unisq.edu.au",
    scholar: "https://scholar.google.com/citations?hl=en&user=ERnkeNUAAAAJ&view_op=list_works",
    orcid: "https://orcid.org/0000-0002-7284-0813",
  },
  {
    id: "sohil-gb",
    group: "current" as const,
    name: "Mr. Sohil Ganesh Babu",
    role: "PhD Scholar",
    focus: "Green solvents · critical mineral recovery · e-waste recycling",
    bio: "Mr. Sohil Ganesh Babu is a PhD scholar at UniSQ. His research focuses on the development of green solvents for critical mineral recovery from e-waste. He has diverse experience in biotechnology, microbiology, and chemistry, and is interested in combining bioengineering of microorganisms with hydrometallurgical methods to recover critical minerals from spent batteries for a circular economy and safer recycling practices.",
    photo: "/team/sohil-ganesh-babu.png",
    email: "sohil.ganeshbabu@unisq.edu.au",
  },
  {
    id: "rollins-suluia",
    group: "current" as const,
    name: "Rollins Suluia",
    role: "PhD Scholar",
    focus: "Electrical engineering · hydrogen from seawater · solar PV integration",
    bio: "Rollins Suluia is an electrical engineer with two decades of experience and qualifications in electrical engineering and engineering science. He has worked as a technician, electrical engineer, project manager, and utility operational manager, with strong expertise in complex electrical systems and infrastructure. His PhD research investigates hydrogen extraction from seawater using excess energy from solar photovoltaic systems while considering social and environmental impacts to support safer renewable energy adoption.",
    photo: "/team/rollins-suluia.png",
    email: "rollins.suluia@unisq.edu.au",
  },
  {
    id: "sandeep-kumar",
    group: "current" as const,
    name: "Sandeep Kumar",
    role: "PhD Scholar",
    focus: "Laboratory research",
    bio: "Sandeep Kumar is an interdisciplinary researcher with a master’s degree in energy storage devices and a strong foundation in electronics and electrical engineering. With hands-on experience in multiple research projects, his work bridges materials science, electrochemistry, and engineering. Sandeep’s passion lies in developing innovative solutions for next-generation batteries. He will be pursuing a PhD focused on advancing post-lithium battery technologies, particularly exploring novel components to enhance safety, performance, and sustainability. Through his research, he aims to contribute to the future of clean energy storage by integrating experimental methods with modern design approaches.",
    photo: "/team/sandeep-kumar.png",
    email: "sandeep.kumar@unisq.edu.au",
  },
  {
    id: "ancy-joseph",
    group: "current" as const,
    name: "Ancy Joseph",
    role: "PhD Scholar",
    focus: "Biomedical engineering · polymer biomaterials · blood storage",
    bio: "Ancy Joseph is a PhD researcher in biomedical engineering with a background in biopolymer science and experience in polymer modification, biomaterials, and nanostructure synthesis. Her research focuses on developing functional polymer-based materials and applying nanotechnology to challenges in blood storage, including short shelf life, bacterial contamination, and harmful chemical leaching from storage bags, with the aim of making blood transfusions safer and more effective. Her project develops nano-textured surfaces inside blood bags using advanced fabrication techniques.",
    photo: "/team/ancy-joseph.png",
    email: "ancy.joseph@unisq.edu.au",
  },
] as const;

/** Former lab members — add entries here as people graduate or move on. */
export type AlumniTeamMember = {
  id: string;
  group: "alumni";
  name: string;
  role: string;
  focus: string;
  bio: string;
  email: string;
  photo?: string;
  scholar?: string;
  orcid?: string;
};

export const alumniMembers: readonly AlumniTeamMember[] = [];

export type TeamMember =
  | (typeof piMembers)[number]
  | (typeof currentTeamMembers)[number]
  | AlumniTeamMember;

export const teamMembers: readonly TeamMember[] = [
  ...piMembers,
  ...currentTeamMembers,
  ...alumniMembers,
];

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group);
}

export const projects = [
  {
    slug: "novel-green-solvent-battery-recycling",
    title: "Development of Novel Green Solvent for Recycling of Spent Batteries",
    status: "Active",
    summary:
      "Development of sustainable green-solvent pathways to improve recovery of valuable materials from spent batteries and support circular-resource processing.",
    partners: ["Centre for Future Materials (UniSQ)"],
  },
  {
    slug: "carbon-accounting-plastic-waste-to-energy",
    title: "Carbon accounting of plastic waste-to-energy pathways for Australian climate and resource recovery policy",
    status: "Active",
    summary:
      "Evaluation of emissions and resource outcomes across plastic waste-to-energy routes to inform evidence-based Australian climate and recovery policy.",
    partners: ["Centre for Future Materials (UniSQ)"],
  },
  {
    slug: "seawater-electrolysis-microgrids",
    title: "Seawater Electrolysis for Microgrids: Catalyst Performance, Water Quality Requirements, and Contextualised System Feasibility",
    status: "Active",
    summary:
      "Investigation of catalyst behavior, feedwater quality constraints, and deployment feasibility for seawater-based hydrogen systems in microgrid contexts.",
    partners: ["Centre for Future Materials (UniSQ)"],
  },
  {
    slug: "hybrid-energy-storage-performance-enhancement",
    title: "Performance Enhancement of Hybrid Energy Storage Devices",
    status: "Active",
    summary:
      "Design and optimization of hybrid storage architectures to improve capacity retention, power delivery, and lifecycle reliability.",
    partners: ["Centre for Future Materials (UniSQ)"],
  },
];

export const newsPosts = [
  {
    slug: "welcome-visiting-fellows",
    title: "Welcome to our 2026 visiting fellows cohort",
    date: "2026-04-12",
    excerpt:
      "Four fellows join us across sensing hardware, Bayesian workflows, and translational statistics.",
  },
  {
    slug: "aurora-milestone",
    title: "Aurora Sense reaches milestone shared calibration release",
    date: "2026-03-02",
    excerpt:
      "v0.9 calibration server documentation is now public alongside benchmark notebooks.",
  },
  {
    slug: "open-office-hours",
    title: "Monthly open office hours for collaborators",
    date: "2026-02-18",
    excerpt:
      "Bring dataset sketches or hardware constraints—we host structured feedback sessions every third Tuesday.",
  },
];

export const galleryItems = [
  {
    id: "optics-bench",
    title: "Optics characterization bench",
    caption: "Temperature-stabilized breadboard for repeatable spectroscopic sweeps.",
  },
  {
    id: "compute-cluster",
    title: "Lab compute cluster",
    caption: "Queued workloads for large inverse solves with reproducible environments.",
  },
  {
    id: "field-kit",
    title: "Field sensing kit",
    caption: "Rugged enclosure prototypes tested across seasonal deployments.",
  },
  {
    id: "student-bench",
    title: "Student prototyping bay",
    caption: "Shared instrumentation with mentorship rotations each semester.",
  },
  {
    id: "clean-hood",
    title: "Sample preparation hood",
    caption: "Controlled workflows for delicate biological and material specimens.",
  },
  {
    id: "seminar-room",
    title: "Seminar room",
    caption: "Hybrid-friendly space for reviews, journal clubs, and partner demos.",
  },
];

export function getTeamMemberById(id: string) {
  return teamMembers.find((member) => member.id === id);
}

export function getTeamSectionLabel(group: TeamGroup) {
  if (group === "pi") return "Principal Investigator";
  if (group === "alumni") return "Alumni";
  return "Current team";
}

export function getNewsBySlug(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
