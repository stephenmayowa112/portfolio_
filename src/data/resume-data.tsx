import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Stephen Mayowa Ojunde",
  initials: "SM",
  location: "Lagos, Nigeria, WAT",
  locationLink: "https://www.google.com/maps/place/lagos",
  about:
    "Full-stack Engineer dedicated to crafting products with meticulous care"
  ,summary:
    "Experienced web developer skilled in frontend  technologies, with proven track record of delivering user-friendly websites promptly and within budget. Actively seeking opportunities to innovate and advance digital solutions.",
  avatarUrl: "https://res.cloudinary.com/dkkyvnhhg/image/upload/v1742315806/miyags1_a7y1zr.jpg",
  personalWebsiteUrl: "https://www.linkedin.com/in/stephenmayowa/",
  contact: {
    email: "stephenmayowa112@gmail.com",
    tel: "+2348130864548",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/stephenmayowa112",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stephenmayowa/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/stephenmayowa16",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Lagos",
      degree: "Bachelor's Degree in Applied Physics",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Univelcity",
      link: "https://univelcity.com",
      badges: ["Onsite"],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "January 2024",
      end: "December 2024",
      description: [
          
      "🔹 Full-Stack Development: ",
      " Built high-performance apps using React/Next.js and Django",
      " Achieved 40% improvement in page load performance",
      " Implemented responsive design patterns across platforms",
      
      ]
    },
    {
      company: "Pointsource.ng",
      link: "https://www.pointsource.ng",
      badges: ["Onsite"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description: [
      "🔹 E-commerce Platform Transformation: ",
      "spearheaded complete platform redesign using WordPress",
      " Drove 45% increase in online sales",
      " Delivered seamless cross-device shopping experience",
    
      ]
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "next.js",
    "Python",
    "Django",
    "Git",
    "AWS",
    "gOOGLE cLOUD",
    "Tailwind CSS",
    "Linux",
    
  ],


  projects: [
    {
      title: "Quicklift",
      techStack: [
        "Side Project",
        "JavaScript",
        "React",
        "Vite",
        "HTML",
        "CSS",
      ],
      description: "A website for a ride hailing company",
      logo: ConsultlyLogo,
      link: {
        label: "quicklift.com",
        href: "https://quicklift2-7uch.vercel.app",
      },
    },
    
    
    {
      title: "Ndara Studio",
      techStack: [
        
        "Next.js",
        "Typescript",
        "TailwindCSS",
        
      ],
      description:
        "A website for a design company based in the UK",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://ndara.vercel.app/",
      },
    },
    



    {
      title: "Athletes on Chain",
      techStack: ["React", "Tailwind CSS"],
      description:
        "A blockchain based plartform for sport developement and management ",
      logo: TastyCloudLogo,
      link: {
        label: "github.com",
        href: "https://athletes-on-chain.onrender.com",
      },
    },
    {
      title: "Candor MInistry",
      techStack: [
        
        "Next.js",
        "Typescript",
        "TailwindCSS",
        
      ],
      description:
        "A website for a faith based organization",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://candor-ministry.onrender.com/",
      },
    },
    {
      title: "Roshe Mentorship",
      techStack: [
        
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Django",
        "supabase",
        
      ],
      description:
        "A mentorship platform for individuals seeking to transition into the animation and design industry",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://new-roshe.onrender.com/",
      },
    },
    
  ],
} as const;
