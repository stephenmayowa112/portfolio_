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
  avatarUrl: "https://res.cloudinary.com/dkkyvnhhg/image/upload/e_improve/v1716529165/miyagi_pic_ywcedk.png",
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
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Developed numerous full fledge responsive websites using react components, and django framework. \n Collaborated with designers and stakeholders to create wireframes, mockups. and prototypes for client projects. \n Managed version control using Git and collaborated with remote teams using Agile methodologies."
    },
    {
      company: "Pointsource.ng",
      link: "https://www.pointsource.ng",
      badges: ["Onsite"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description:
        "Managed and maintained the organization's e-commerce platform.",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "Git",
    "Cloud Computing",
    "Tailwind CSS",
    "Linux",
    
  ],


  projects: [
    {
      title: "Quicklift",
      techStack: [
        "Side Project",
        "JavaScript",
        "next.js",
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
      title: "Form Validation",
      techStack: [
        
        "JavaScript",
        "HTML",
        "CSS",
        
      ],
      description:
        "A form that follows the form validation principles",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://stephenmayowa112.github.io/formValidation/",
      },
    },
    



    {
      title: "Who wants to be a Thousandnaire",
      techStack: ["Python"],
      description:
        "A game built with python that mimics the popular 'who wants to be a Millionaire' game ",
      logo: TastyCloudLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Micode360/Who-wants-to-be-a-Thousandnaire/tree/miyagi",
      },
    },
    
  ],
} as const;
