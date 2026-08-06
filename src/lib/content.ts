/** Shown under the lab name on the home splash and in the header tagline area. */
export const labTagline =
  "Graphene Nanomaterials • Next Generation Batteries\nCircular Economy • Energy Materials";

export const site = {
  name: "Nanjundan Lab",
  tagline: labTagline,
  address: [
    "University of Southern Queensland",
    "37 Sinnathamby Boulevard",
    "Springfield Central QLD 4300",
  ],
  email: "ashok.nanjundan@unisq.edu.au",
  phone: "+61 7 3470 4534",
  mapQuery: "37 Sinnathamby Boulevard, Springfield Central QLD 4300, Australia",
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
    name: "Department of Industry, Science and Resources",
    src: "/funding/disr.png",
    href: "https://www.industry.gov.au/",
    width: 300,
    height: 224,
  },
  {
    name: "University of Southern Queensland",
    src: "/funding/unisq.png",
    href: "https://www.unisq.edu.au/",
    width: 288,
    height: 103,
  },
] as const;

export const principalInvestigator = {
  name: "Prof. Ashok Kumar Nanjundan",
  title: "Professor of Energy Storage",
  affiliations: [
    "University of Southern Queensland",
    "Honorary Professor, The University of Queensland",
  ],
  bio: "An innovative materials scientist focused on carbon-based nanomaterials for advanced energy storage, with leadership experience spanning university research, international fellowships, and graphene industry translation.",
  bioExtended:
    "He has secured more than AUD 5 million in research funding, authored over 100 publications in leading journals, accumulated more than 11,000 citations (h-index 57), and filed seven patents including a granted US patent.",
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=p6EhiTkAAAAJ",
    universityBio: "https://research.usq.edu.au/researcher/z1045/prof-ashok-nanjundan",
    orcid: "https://orcid.org/0000-0001-6502-0844",
    linkedin: "https://www.linkedin.com/in/ashok-kumar-nanjundan/",
    researchGate: "https://www.researchgate.net/profile/Ashok-Kumar-Nanjundan",
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
  researchTitle: "What we work on",
  researchBody: "Graphene and hybrid nanomaterials, next-generation batteries, critical mineral recovery, and seawater-integrated hydrogen systems.",
  projectsEyebrow: "Projects",
  projectsTitle: "Active work",
  aboutEyebrow: "About",
  aboutTitle: "Materials innovation for clean energy",
  aboutTeaser:
    "We are a part of the School of Science, Engineering & Digital Technologies, the Institute for Space, Defence & Advanced Technologies and the Centre for Future Materials at UniSQ. We design advanced materials and electrochemical systems for clean energy and the circular economy.",
  statsEyebrow: "Impact",
  statsTitle: "Research at a glance",
  exploreEyebrow: "Explore",
  exploreTitle: "Discover our work",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  // { href: "/news", label: "News" }, // hidden for now
  { href: "/join-us", label: "Join Us" },
] as const;

/** Sub-links under the Research nav dropdown. */
export const researchNavDropdown = [
  { href: "/projects", label: "Research interests" },
  { href: "/grants", label: "Grants" },
] as const;

/** Sub-links under the Team nav dropdown. */
export const principalInvestigatorId = "nanjundan" as const;

export const teamNavDropdown = [
  { href: `/team/${principalInvestigatorId}`, label: "Principal Investigator" },
  { href: "/team/current", label: "Current team" },
  { href: "/team/adjunct", label: "Adjunct Faculty" },
  { href: "/team/alumni", label: "Alumni" },
] as const;

export type TeamGroup = "pi" | "current" | "adjunct" | "alumni";

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
    name: "Prof. Ashok Kumar Nanjundan FRSC",
    role: "Professor of Energy Storage\nAssociate Head (Outreach, Engagement & International)\nResearch Integrity Advisor (UniSQ)",
    focus: "Carbon Nanomaterials · Advanced Energy Storage · Industry Translation",
    bio: "An innovative materials scientist specialising in carbon-based nanomaterials for energy storage, with an academic and industry career spanning graphene commercialisation, international fellowships, and large-scale collaborative research.",
    careerSummary:
      "Prof. Ashok Kumar Nanjundan is an innovative materials scientist whose work centres on carbon-based nanomaterials for advanced energy storage. He previously served as Chief Scientific Officer at Graphene Manufacturing Group, Australia, and holds honorary professorships at The University of Queensland and Queensland University of Technology. He has been awarded the Marie-Curie, JSPS-Japan, and UQ fellowships. He has secured more than AUD 5 million in research funding, published over 100 articles in journals including Nature Protocols, Chemical Reviews, and ACS Nano, and accumulated more than 11,000 citations (h-index 57). He is also named on seven patent filings, including a granted US patent.",
    professionalExperience:
      "At the University of Southern Queensland he is Professor of Energy Storage and Associate Head (Outreach, Engagement & International). He has held a visiting appointment at the Energy Consortium, IIT Madras. As Chief Scientific Officer at Graphene Manufacturing Group he connected academic research with industry priorities, led R&D from concept to manufacturing, commercialised the graphene aluminium-ion battery, developed graphene-based automotive additives, and prepared regulatory and quality-system documentation for nanomaterials and energy technologies. His earlier roles include UQ Postdoctoral Research Fellow, sessional academic at Griffith University, JSPS Fellow at Kumamoto University, research and visiting fellowships at Trinity College Dublin and UNSW, Marie-Curie Fellow at CEA Grenoble, and postdoctoral research at UNIST.",
    photo: "/team/prof-ashok.png",
    email: "ashok.nanjundan@unisq.edu.au",
    scholar: "https://scholar.google.com/citations?hl=en&user=p6EhiTkAAAAJ",
    orcid: "https://orcid.org/0000-0001-6502-0844",
    linkedin: "https://www.linkedin.com/in/ashok-kumar-nanjundan/",
  },
] as const;

const currentTeamMembers = [
  {
    id: "rollins-suluia",
    group: "current" as const,
    name: "Rollins Suluia",
    role: "PhD Scholar",
    focus: "Electrical engineering · hydrogen from seawater · solar PV integration",
    bio: "Rollins Suluia is an electrical engineer with two decades of experience and qualifications in electrical engineering and engineering science. He has worked as a technician, electrical engineer, project manager, and utility operational manager, with strong expertise in complex electrical systems and infrastructure. His PhD research investigates hydrogen extraction from seawater using excess energy from solar photovoltaic systems while considering social and environmental impacts to support safer renewable energy adoption.",
    photo: "/team/rollins-suluia.png",
    email: "rollins.suluia@unisq.edu.au",
    joined: "May 2025",
  },
  {
    id: "annamalai",
    group: "current" as const,
    name: "Dr. Pratheep K. Annamalai",
    role: "Senior Research Fellow",
    focus: "Sustainable materials · circular polymers · translational research",
    bio: "Dr. Pratheep K. Annamalai is a polymer and nanomaterials scientist interested in engineering materials for sustainable living. He has extensive expertise in both translational and fundamental research. His interests include valorizing crops and food waste into nanomaterials, reactive building blocks, and carbon materials for engineering applications and advanced devices. He currently leads circular polymer products research at UniSQ.",
    photo: "/team/pratheep-kumar-annamalai.png",
    email: "pratheep.annamalai@unisq.edu.au",
    scholar: "https://scholar.google.com/citations?hl=en&user=ERnkeNUAAAAJ&view_op=list_works",
    orcid: "https://orcid.org/0000-0002-7284-0813",
  },
  {
    id: "shuimei-chen",
    group: "current" as const,
    name: "Dr. Shuimei Chen",
    role: "Research Fellow",
    focus: "Rechargeable aluminium-ion batteries · Electrode materials",
    bio: "Shuimei Chen specialises in rechargeable aluminium-ion batteries. She received her Master's degree from China University of Geosciences, Wuhan in 2019, and completed her PhD under the supervision of Dr. Xiaodan Huang, Prof. Chengzhong Yu, and Prof. Ashok Kumar Nanjundan at the University of Queensland. Her research focuses on the design and synthesis of electrode materials for rechargeable aluminium batteries.",
    photo: "/team/shuimei-chen.png",
    email: "Shuimei.chen@unisq.edu.au",
  },
  {
    id: "sandeep-kumar",
    group: "current" as const,
    name: "Sandeep Kumar",
    role: "PhD Scholar",
    focus: "Laboratory research",
    bio: "Sandeep Kumar is an interdisciplinary researcher with a master's degree in energy storage devices and a strong foundation in electronics and electrical engineering. With hands-on experience in multiple research projects, his work bridges materials science, electrochemistry, and engineering. Sandeep's passion lies in developing innovative solutions for next-generation batteries. His PhD research focuses on advancing post-lithium battery technologies, particularly exploring novel components to enhance safety, performance, and sustainability. Through his research, he aims to contribute to the future of clean energy storage by integrating experimental methods with modern design approaches.",
    photo: "/team/sandeep-kumar.png",
    email: "sandeep.kumar@unisq.edu.au",
    joined: "May 2025",
  },
  {
    id: "bidita-salahuddin",
    group: "current" as const,
    name: "Bidita Salahuddin",
    role: "PhD Scholar",
    focus: "Life cycle assessment · carbon accounting · plastic waste-to-energy",
    bio: "Bidita joined Prof. Nanjundan's research group in January 2026. Her research focuses on life cycle assessment, carbon accounting and sustainability evaluation of plastic waste treatment technologies, with a particular emphasis on thermochemical waste-to-energy pathways such as pyrolysis, gasification and incineration. Her work examines environmental impacts, carbon flow dynamics and circularity potential to support sustainable plastic waste management under net-zero transitions. Bidita is also affiliated with the Solving Plastic Waste CRC, contributing to collaborative research on circular economy approaches and advanced plastic waste recovery solutions.",
    photo: "/team/bidita-salahuddin.png",
    email: "",
    joined: "January 2026",
  },
  {
    id: "sohil-gb",
    group: "current" as const,
    name: "Sohil Ganesh Babu",
    role: "PhD Scholar",
    focus: "Green solvents · critical mineral recovery · e-waste recycling",
    bio: "Mr. Sohil Ganesh Babu is a PhD scholar at UniSQ. His research focuses on the development of green solvents for critical mineral recovery from e-waste. He has diverse experience in biotechnology, microbiology, and chemistry, and is interested in combining bioengineering of microorganisms with hydrometallurgical methods to recover critical minerals from spent batteries for a circular economy and safer recycling practices.",
    photo: "/team/sohil-ganesh-babu.png",
    email: "sohil.ganeshbabu@unisq.edu.au",
    joined: "April 2026",
  },
  {
    id: "vedang-sonar",
    group: "current" as const,
    name: "Vedang Avinash Sonar",
    role: "PhD Scholar",
    focus: "COFs · organic electrode materials · sodium-ion & potassium-ion batteries",
    bio: "Vedang Sonar obtained his M.Sc. in General Chemistry from Vellore Institute of Technology (VIT), Tamil Nadu, India, following a B.Sc. in Chemistry from Sir Parashurambhau (S.P.) College, Pune, India. His research interests focus on Covalent Organic Frameworks (COFs) and other functional porous materials for electrochemical energy storage. During his academic training, he gained research experience in both India and Australia, including at the National Chemical Laboratory (NCL) and Queensland University of Technology (QUT). He is the first author of a peer-reviewed review article on COFs for multivalent-ion batteries. His interests include sodium-ion and potassium-ion batteries, organic electrode materials, and the development of sustainable materials for next-generation energy storage systems — spanning electrochemical applications of COFs, synthesis and characterization of advanced polymers and hybrid materials, porous functional materials for energy storage, and sustainable energy-storage technologies.",
    photo: "/team/vedang-avinash-sonar.png",
    email: "",
    joined: "July 2026",
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
    joined: "June 2025",
  },
  {
    id: "jiahu-zhang",
    group: "current" as const,
    name: "Jiahu Zhang",
    role: "PhD Scholar",
    focus: "Heavy-metal removal · MOFs · COFs · environmental functional materials",
    bio: "Jiahu Zhang began his PhD study in 2026 at the School of Science, Engineering and Digital Technologies, University of Southern Queensland. His current research focuses on the development of advanced materials for the removal and recovery of heavy-metal ions from contaminated water. His broader research interests include the design of environmental functional materials for heavy-metal pollution remediation, particularly through adsorption and electrocatalytic approaches. He has a background in materials science, materials characterization, and adsorption, and is currently working on a range of environmental functional materials, such as metal–organic frameworks (MOFs), covalent organic frameworks (COFs), and magnetic polymer-based composites, for heavy-metal removal and mechanistic investigation.",
    photo: "/team/jiahu-zhang.png",
    email: "Jiahu.Zhang@unisq.edu.au",
    joined: "January 2026",
  },
] as const;

/** Adjunct collaborators affiliated with the lab. */
export type AdjunctTeamMember = {
  id: string;
  group: "adjunct";
  name: string;
  role: string;
  focus: string;
  bio: string;
  careerSummary?: string;
  professionalExperience?: string;
  email: string;
  photo?: string;
  scholar?: string;
  orcid?: string;
  linkedin?: string;
};

export const adjunctMembers: readonly AdjunctTeamMember[] = [
  {
    id: "kothandaraman-ramanujam",
    group: "adjunct",
    name: "Prof. Kothandaraman Ramanujam, FRSC",
    role: "Professor\nIIT Madras\nAdjunct Professor - UniSQ",
    focus: "Li/Na/Zn batteries · dye-sensitized solar cells · electrochemical sensors",
    bio: "An electrochemist focused on India-centric energy storage, functional materials, and translatable battery, solar, and sensor technologies.",
    careerSummary:
      "Dr. Kothandaraman Ramanujam applies electrochemistry to India-centric energy storage and conversion, developing functional materials, redox-active organic molecules, and battery systems built on abundant resources such as sodium and zinc. His research spans lithium, sodium, and zinc-ion batteries, organic dyes for dye-sensitized solar cells, and electrochemical sensors—delivering translatable outcomes including sustainable sodium-ion anode materials, patented zinc-ion innovations, and high-efficiency solar dyes. He is incubating Electrobasics, a startup at IIT Madras focused on custom materials for electrochemical science and engineering.",
    professionalExperience:
      "He was elected Fellow of the Academy of Sciences, Chennai (2020) and Fellow of the Royal Society of Chemistry (FRSC, 2020). He serves on the board of studies at Vellore Institute of Technology (VIT) Bhopal Campus and Bannariamma Institute of Technology (BIT), Sathyamangalam; is adjunct faculty at the National Center for Catalysis Research, IIT Madras; and has been a Visiting Scientist at Washington University in St. Louis.",
    photo: "/team/kothandaraman-ramanujam.png",
    email: "",
  },
  {
    id: "prashanth-w-menezes",
    group: "adjunct",
    name: "Dr. Prashanth W. Menezes",
    role: "Head of Department\nMaterials Chemistry for catalysis\nHelmholtz-Zentrum Berlin\nAdjunct Associate Professor - UniSQ",
    focus: "Intermetallic catalysis · electrocatalysis · green hydrogen",
    bio: "A catalysis and materials chemist advancing intermetallic electrocatalysts and sustainable energy conversion for green hydrogen production.",
    careerSummary:
      "Dr. Prashanth W. Menezes heads the Department of Materials Chemistry for Catalysis at the Helmholtz-Zentrum Berlin (HZB), where his research advances intermetallic catalysis, electrocatalytic processes, and sustainable energy conversion systems. He is widely recognized for contributions to catalyst design and reaction mechanisms for renewable energy applications.",
    photo: "/team/prashanth-w-menezes.png",
    email: "",
  },
  {
    id: "rohit-ranganathan-gaddam",
    group: "adjunct",
    name: "Dr. Rohit Ranganathan Gaddam",
    role: "Assistant Professor\nIISER Bhopal\nAdjunct Senior Lecturer - UniSQ",
    focus: "Functional materials · lithium-ion storage · sodium-ion & aqueous batteries · solid-state conductors",
    bio: "A materials scientist specialising in advanced functional materials and electrochemical energy storage across lithium-ion, sodium-ion, and solid-state battery systems.",
    careerSummary:
      "Dr. Rohit Ranganathan Gaddam is a former PhD student of Prof. Ashok whose work centres on the synthesis and characterisation of advanced functional materials for electrochemical energy storage. He holds a Ph.D. from The University of Queensland (2019) and an integrated M.Tech from Amity University, India (2014). His research addresses material design and electrochemical performance across lithium-ion and sodium-ion batteries, high-performance aqueous battery systems, and lithium and sodium-ion solid-state conductors for solid-state batteries.",
    professionalExperience:
      "Dr. Gaddam was a Postdoctoral Research Fellow in the School of Chemical Engineering at UQ (2018–2019), an Alexander von Humboldt Fellow at the Technical University of Munich (2020–2021), and a Visiting Scholar at Washington University in St. Louis (2018). He also completed master's dissertation and project work at CSIR-Indian Institute of Chemical Technology, Hyderabad (2013–2015). He is currently Assistant Professor of Chemical Engineering at IISER Bhopal.",
    photo: "/team/rohit-ranganathan-gaddam.png",
    email: "",
  },
  {
    id: "venkata-chevali",
    group: "adjunct",
    name: "Dr. Venkata Chevali",
    role: "Adjunct Associate Professor - UniSQ",
    focus: "Advanced composites · polymer composites · flame-retardant materials · sustainable biocomposites",
    bio: "A materials scientist specialising in advanced polymer and composite systems, from rapid thermoplastic processing to flame-retardant polymers and sustainable biocomposites.",
    careerSummary:
      "Venkata Chevali's research lies at the intersection of materials science, macromolecular chemistry and chemical engineering, with a sustained focus on the design, processing and performance of advanced polymer and composite systems. His work exploits emerging manufacturing paradigms spanning rapid processing of thermoplastic composites, flame-retardant polymers and sustainable biocomposites derived from renewable feedstocks. Central to this program is the nanoengineering of interfaces and architectures: synergistic flame-retardant networks, nanoreinforcements targeted to fibre–matrix interfaces, molecular-dynamics interrogation of atomistic behaviour, and the identification and characterisation of rare or anomalous phenomena in high-performance materials. Through long-term collaboration with industrial partners, he has progressed multiple concepts from lab scale to pilot and pre-commercial deployment.",
    professionalExperience:
      "Dr Chevali currently serves as Chief Investigator on ARC Discovery Project DP230103008, Linkage Infrastructure project LE230100179, and the SIMPLE Hub, collectively exceeding $4.8 million in competitive funding. His international collaborations include Prof. Uday K. Vaidya (University of Tennessee, Knoxville), Dr Sebastian Spierling (Leibniz University Hannover), and Prof. Srikanth Pilla (University of Delaware). He is affiliated with the Centre for Future Materials and the Institute for Space, Defence and Advanced Technologies at UniSQ.",
    photo: "/team/venkata-chevali.png",
    email: "",
    orcid: "https://orcid.org/0000-0002-5648-0344",
    linkedin: "https://www.linkedin.com/in/venkatachevali/",
  },
];

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
  thesis?: {
    title: string;
    citation: string;
    doi: string;
  };
};

export const alumniMembers: readonly AlumniTeamMember[] = [
  {
    id: "rohit-ranganathan-gaddam",
    group: "alumni",
    name: "Dr. Rohit Ranganathan Gaddam",
    role: "Former PhD Student\nCurrently Assistant Professor at IISER Bhopal",
    focus: "Functional materials · lithium-ion storage · sodium-ion & aqueous batteries · solid-state conductors",
    bio: "Dr. Rohit Ranganathan Gaddam is a former PhD student of Prof. Ashok whose work centres on the synthesis and characterisation of advanced functional materials for electrochemical energy storage. He holds a Ph.D. from The University of Queensland (2019) and an integrated M.Tech from Amity University, India (2014). His research addresses material design and electrochemical performance across lithium-ion and sodium-ion batteries, high-performance aqueous battery systems, and lithium and sodium-ion solid-state conductors for solid-state batteries. Dr. Gaddam was a Postdoctoral Research Fellow in the School of Chemical Engineering at UQ (2018–2019), an Alexander von Humboldt Fellow at the Technical University of Munich (2020–2021), and a Visiting Scholar at Washington University in St. Louis (2018). He also completed master's dissertation and project work at CSIR-Indian Institute of Chemical Technology, Hyderabad (2013–2015). He is currently Assistant Professor of Chemical Engineering at IISER Bhopal.",
    photo: "/team/rohit-ranganathan-gaddam.png",
    email: "",
  },
  {
    id: "dongfang-yang",
    group: "alumni",
    name: "Dongfang Yang",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
    thesis: {
      title: "Nickel cobaltite-based anode materials for sodium-ion capacitors",
      citation:
        "Yang, Dongfang (2019). Nickel cobaltite-based anode materials for sodium-ion capacitors. PhD Thesis, School of Chemical Engineering, The University of Queensland.",
      doi: "https://doi.org/10.14264/uql.2019.164",
    },
  },
  {
    id: "yverick-rangom",
    group: "alumni",
    name: "Yverick Rangom",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
  },
  {
    id: "hao-liu",
    group: "alumni",
    name: "Hao Liu",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
  },
  {
    id: "yilan-wu",
    group: "alumni",
    name: "Yilan Wu",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
  },
  {
    id: "rana-afzal",
    group: "alumni",
    name: "Rana Afzal",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
    photo: "/team/rana-afzal.png",
    thesis: {
      title: "A systematic investigation on the valorisation of carbon from sorghum biomass for energy storage materials",
      citation:
        "Afzal, Rana (2023). A systematic investigation on the valorisation of carbon from sorghum biomass for energy storage materials. PhD Thesis, School of Chemical Engineering, The University of Queensland.",
      doi: "https://doi.org/10.14264/7e7186e",
    },
  },
  {
    id: "shumei-chen",
    group: "alumni",
    name: "Shuimei Chen",
    role: "Former PhD Student\nPostdoc at UniSQ",
    focus: "",
    bio: "",
    email: "",
    photo: "/team/shuimei-chen.png",
    thesis: {
      title: "Development of stable and high-capacity aqueous aluminum-ion batteries",
      citation:
        "Chen, Shuimei (2025). Development of stable and high-capacity aqueous aluminum-ion batteries. PhD Thesis, Australian Institute for Bioengineering and Nanotechnology, The University of Queensland.",
      doi: "https://doi.org/10.14264/88b3f68",
    },
  },
  {
    id: "nashaat-gadelhak",
    group: "alumni",
    name: "Nashaat Gadelhak",
    role: "Former PhD Student",
    focus: "",
    bio: "",
    email: "",
    photo: "/team/nashaat-gadelhak.png",
    thesis: {
      title: "Functional Membrane Separators for Rechargeable Non-Aqueous Aluminium-Ion Batteries",
      citation:
        "Gadelhak, Nashaat (2026). Functional Membrane Separators for Rechargeable Non-Aqueous Aluminium-Ion Batteries. PhD Thesis, Australian Institute for Bioengineering and Nanotechnology, The University of Queensland.",
      doi: "https://doi.org/10.14264/df3c807",
    },
  },
];

export type TeamMember =
  | (typeof piMembers)[number]
  | (typeof currentTeamMembers)[number]
  | AdjunctTeamMember
  | AlumniTeamMember;

export const teamMembers: readonly TeamMember[] = [
  ...piMembers,
  ...currentTeamMembers,
  ...adjunctMembers,
  ...alumniMembers,
];

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group);
}

export const projects = [
  {
    slug: "clean-energy",
    title: "Clean Energy",
    status: "Program",
    summary:
      "Advanced materials and electrochemical systems for next-generation batteries, supercapacitors, hydrogen generation, and scalable clean-energy storage.",
    focusAreas: [
      "Next-generation batteries & supercapacitors",
      "Seawater electrolysis & hydrogen systems",
      "Hybrid energy storage architectures",
      "Lab-to-device translation",
    ],
    partners: ["Centre for Future Materials (UniSQ)"],
    image: "/images/research/clean-energy.png",
  },
  {
    slug: "defence",
    title: "Defence",
    status: "Program",
    summary:
      "Advanced materials, energy systems, and sensing technologies for resilient defence applications, including secure power, environmental monitoring, and field-deployable electrochemical devices.",
    focusAreas: [
      "Energy storage for defence systems",
      "Environmental & threat sensing",
      "Seawater electrolysis for remote operations",
      "Durable materials for harsh environments",
    ],
    partners: ["Centre for Future Materials (UniSQ)"],
    image: "/images/research/defence.png",
  },
  {
    slug: "nanomaterials",
    title: "Nanomaterials",
    status: "Program",
    summary:
      "Design and engineering of graphene and hybrid nanomaterials for high-performance interfaces in energy, sensing, and advanced device applications.",
    focusAreas: [
      "Graphene & carbon nanoarchitectures",
      "MOF-derived heterostructures",
      "Electrochemical interface design",
      "Nanomaterial scale-up & characterisation",
    ],
    partners: ["Centre for Future Materials (UniSQ)"],
    image: "/images/research/nanomaterials.png",
  },
  {
    slug: "circular-economy",
    title: "Circular Economy",
    status: "Program",
    summary:
      "Sustainable recovery of critical minerals, green-solvent recycling, waste-to-resource processing, and circular approaches to materials and energy.",
    focusAreas: [
      "Critical mineral recovery from e-waste",
      "Green-solvent battery recycling",
      "Waste-to-energy carbon accounting",
      "Bio-assisted extraction pathways",
    ],
    partners: ["Centre for Future Materials (UniSQ)"],
    image: "/images/research/circular-economy.png",
  },
] as const;

export const researchPageCopy = {
  heroSubtitle:
    "Integrating nanomaterials, electrochemical engineering, and circular-resource chemistry to deliver clean energy and sustainable materials outcomes.",
  introEyebrow: "Our approach",
  introTitle: "From molecular design to deployable technology",
  introBody:
    "Nanjundan Lab sits within the Centre for Future Materials at the University of Southern Queensland. We combine materials synthesis, device fabrication, and industry-linked translation across four strategic programs — select a program below to explore its focus areas and active workstreams.",
} as const;

export const grantsPageCopy = {
  heroSubtitle:
    "Competitive research funding and fellowships supporting nanomaterials, energy storage, and industry-linked translation.",
  introEyebrow: "Funding",
  introTitle: "Competitive grants and fellowships",
  introBody:
    "Prof. Ashok Kumar Nanjundan has secured over AUD 5 million in research funding since 2015, spanning ARC Centres and Hubs, Linkage Projects, bilateral schemes, and prestigious individual fellowships.",
} as const;

/** Competitive grants and fellowships — URLs from CV_Ashok Nanjundan_April 2026.docx */
/** Competitive grants — topics from CV-linked ARC/UQ project pages (AISRF omitted). */
export const competitiveGrants = [
  {
    year: 2026,
    role: "Lead CI",
    title: "Australia India Strategic Research Fund",
    topic: "Green chemistry for recovering critical minerals from batteries in e-waste",
    code: null,
    amount: "AU$ 918K",
    href: "https://www.industry.gov.au/accessing-information/grants-reporting/australia-india-strategic-research-fund-grant-recipients",
  },
  {
    year: 2023,
    role: "CI",
    title: "ARC Centre of Excellence for Green Electrochemical Transformation of Carbon Dioxide",
    topic: null,
    code: "CE230100017",
    amount: "AU$ 35.0M",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/CE230100017",
  },
  {
    year: 2021,
    role: "PI",
    title: "ARC Research Hub for Advanced Manufacturing with 2D Materials",
    topic: null,
    code: "IH210100025",
    amount: "AU$ ~4.4M",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/IH210100025",
  },
  {
    year: 2020,
    role: "CI",
    title: "ARC Research Hub for Safe and Reliable Energy",
    topic: "New safe and reliable energy storage and conversion technologies",
    code: "IH200100035",
    amount: "AU$ 5.0M",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/IH200100035",
  },
  {
    year: 2020,
    role: "PI",
    title: "ARC Linkage Project",
    topic: "Enabling next-generation rechargeable aluminium-ion batteries",
    code: "LP190101279",
    amount: "AU$ ~390K from ARC; total AU$ 540K",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/LP190101279",
  },
  {
    year: 2020,
    role: "PI",
    title: "ARC Linkage Project",
    topic: "Developing high performance nanocomposite coatings for domestic appliances",
    code: "LP190100830",
    amount: "AU$ ~512K from ARC; total AU$ 877K",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/LP190100830",
  },
  {
    year: 2019,
    role: "CI/PI",
    title: "ARC Linkage Project",
    topic: "Functional biomass carbons for low-cost sodium and potassium-ion batteries",
    code: "LP180100429",
    amount: "AU$ ~425K from ARC; total AU$ 695K",
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/LP180100429",
  },
  {
    year: 2019,
    role: "CI",
    title: "Scheme for Promotion of Academic and Research Collaboration (SPARC)",
    topic:
      "Preparation of nanocellulose and nanocomposites as multifunctional materials derived from biomass towards sustainable developments",
    code: null,
    amount: "AU$ ~100K",
    href: "https://researchers.uq.edu.au/research-project/39645",
  },
  {
    year: 2015,
    role: "Part PI",
    title: "ARC Research Hub for Graphene Enabled Industry Transformation",
    topic: null,
    code: "IH150100003",
    amount: null,
    href: "https://dataportal.arc.gov.au/NCGP/Web/Grant/Grant/IH150100003",
  },
] as const;

export const individualFellowships = [
  {
    year: 2017,
    role: null,
    title: "UQ Early Career Researcher Grant",
    topic: "Biomass derived binder-free carbon anodes for sodium-ion batteries",
    amount: null,
    href: "https://researchers.uq.edu.au/research-project/30317",
  },
  {
    year: 2015,
    role: null,
    title: "UQ Fellowship",
    topic:
      "Functionalised graphene materials for the development of next generation advanced supercapacitors and lithium-ion battery devices",
    amount: null,
    href: "https://researchers.uq.edu.au/research-project/22916",
  },
  {
    year: 2012,
    role: null,
    title: "JSPS Fellowship",
    topic: "Energy conversion and storage devices using graphene-layered hybrid materials",
    amount: null,
    href: "https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-12F02347",
  },
  {
    year: 2012,
    role: null,
    title: "Science Fellowship Writing Scheme Award",
    topic: "University of New South Wales, Australia",
    amount: null,
    href: null,
  },
  {
    year: 2011,
    role: null,
    title: 'Marie Curie Fellowship "CEA-Eurotalents"',
    topic: "Commissariat à l'énergie atomique (CEA), Grenoble, France",
    amount: null,
    href: null,
  },
  {
    year: 2007,
    role: null,
    title: "Brain of Korea (BK21) PhD Fellowship",
    topic: null,
    amount: null,
    href: null,
  },
] as const;

export const aboutPageCopy = {
  missionEyebrow: "Who we are",
  missionTitle: "A lab built on rigorous science and real-world impact",
  missionBody:
    "We are a part of the School of Science, Engineering & Digital Technologies, the Institute for Space, Defence & Advanced Technologies and the Centre for Future Materials at UniSQ. We design advanced materials and electrochemical systems for clean energy and the circular economy.",
  missionBodyExtended:
    "Our work combines materials design, process innovation, and industry-linked translation. We mentor the next generation of researchers while partnering with funding bodies, industry, and international collaborators to move ideas from the bench toward deployable outcomes.",
  teamTitle: "Led by experienced researchers, powered by emerging talent",
  teamBody:
    "Prof. Ashok Kumar Nanjundan leads the group as Principal Investigator, with senior research fellow Dr. Pratheep K. Annamalai supporting translational materials research. Our cohort includes PhD scholars, adjunct collaborators across Australia and internationally, and a growing alumni network.",
  exploreTitle: "Explore our group",
  exploreBody: "Research programs, publications, and opportunities to join the lab live on their own pages.",
} as const;

export const centreForFutureMaterials = {
  name: "Centre for Future Materials",
  shortName: "CFM",
  institute: "Institute for Space, Defence and Advanced Technologies",
  url: "https://www.unisq.edu.au/research/institutes-centres/institute-for-space-defence-and-advanced-technologies/centre-for-future-materials",
  tagline:
    "A world-leading research centre in advanced composite materials and applications, partnering with industry towards innovation and growth.",
  overview:
    "The Centre for Future Materials (CFM) at the University of Southern Queensland is known internationally for research and development in engineered fibre composites, functional materials, and advanced manufacturing. It prioritises industry-led R&D across aerospace, defence, space, civil infrastructure, clean energy, and sustainable industry.",
  overviewExtended:
    "CFM operates one of Australia's largest dedicated composite materials manufacturing and testing facilities, with industrial-scale equipment for filament winding, robotic braiding, pultrusion, resin infusion, fire testing, and large-scale structural testing. Its industry test service has supported more than 1,000 clients nationally and internationally.",
  labConnection:
    "Nanjundan Lab contributes to CFM's Clean Energy and Environment research theme from the Springfield Central campus, advancing functional materials, next-generation batteries, critical mineral recovery, and electrochemical systems for sustainable technology.",
  focusAreas: [
    {
      title: "Space & defence",
      body: "High-value composites manufacturing for aerospace, defence, and space — including repair, robotic filament winding, pultrusion, and oxide-oxide ceramic composites.",
    },
    {
      title: "Clean energy & environment",
      body: "Functional composites, structural health monitoring, nanomaterials for energy conversion, sodium-ion batteries, electrochemical manufacturing, and sustainable materials.",
    },
    {
      title: "Civil engineering",
      body: "Engineered fibre composites for civil infrastructure, large-scale structural testing, computational modelling, and climate-resilient construction materials.",
    },
    {
      title: "Sustainable industry design",
      body: "Process technologies and management of recovered waste materials — plastics, fibres, and fly ash — for high-value, low-carbon emission products.",
    },
  ],
} as const;

export const researchStats = [
  { label: "Research funding", value: "$5M+", icon: "funding" },
  { label: "Publications", value: "100+", icon: "publications" },
  { label: "Citations", value: "11,000+", icon: "citations" },
  { label: "Patents", value: "7", icon: "patents" },
] as const;

export const activeResearchProjects = [
  {
    slug: "novel-green-solvent-battery-recycling",
    title: "Development of Novel Green Solvent for Recycling of Spent Batteries",
    status: "Active",
    summary:
      "Sustainable green-solvent pathways to improve recovery of valuable materials from spent batteries and support circular-resource processing.",
    program: "circular-economy",
  },
  {
    slug: "carbon-accounting-plastic-waste-to-energy",
    title: "Carbon accounting of plastic waste-to-energy pathways for Australian climate and resource recovery policy",
    status: "Active",
    summary:
      "Evaluation of emissions and resource outcomes across plastic waste-to-energy routes to inform evidence-based Australian climate and recovery policy.",
    program: "circular-economy",
  },
  {
    slug: "seawater-electrolysis-microgrids",
    title: "Seawater Electrolysis for Microgrids",
    status: "Active",
    summary:
      "Catalyst behaviour, feedwater quality constraints, and deployment feasibility for seawater-based hydrogen systems in microgrid contexts.",
    program: "defence",
  },
  {
    slug: "hybrid-energy-storage-performance-enhancement",
    title: "Performance Enhancement of Hybrid Energy Storage Devices",
    status: "Active",
    summary:
      "Design and optimisation of hybrid storage architectures to improve capacity retention, power delivery, and lifecycle reliability.",
    program: "clean-energy",
  },
] as const;

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
  return (
    piMembers.find((member) => member.id === id) ??
    currentTeamMembers.find((member) => member.id === id) ??
    adjunctMembers.find((member) => member.id === id) ??
    alumniMembers.find((member) => member.id === id)
  );
}

export function getTeamSectionLabel(group: TeamGroup) {
  if (group === "pi") return "Principal Investigator";
  if (group === "adjunct") return "Adjunct Faculty";
  if (group === "alumni") return "Alumni";
  return "Current team";
}

export function getNewsBySlug(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
