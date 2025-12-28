export interface Project {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  website: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "HRMIS Abujapi",
    description: "Human Resource Management Information System for BPD Abujapi Jabar.",
    longDescription: "A comprehensive HRMIS system designed for BPD Abujapi Jabar to manage employee data, attendance, payroll, and performance evaluations. Built with modern tech stack including Next.js, featuring real-time data processing with Redis and RabbitMQ for message queuing. The system streamlines HR operations and provides detailed analytics for better decision-making.",
    images: [
      "/images/projects/abujapi-hrmis-1.png",
      "/images/projects/abujapi-hrmis-2.png",
      "/images/projects/abujapi-hrmis-3.png"
    ],
    website: "https://hrmis.bpdabujapijabar.or.id/login", 
    techStack: ["NextJS", "TypeScript", "TailwindCSS", "Shadcn", "Tanstack", "PostgreSQL", "Redis", "RabbitMQ"]
  },
  {
    title: "Admin Abujapi CMS",
    description: "Content Management System for BPD Abujapi Jabar profile website.",
    longDescription: "A powerful CMS built to manage the content of BPD Abujapi Jabar's profile website. Features a modern admin interface powered by Laravel and Inertia.js with Next.js for the frontend. Includes real-time content editing, media management, and role-based access control. Utilizes PostgreSQL for robust data management and Redis for caching and session management.",
    images: [
      "/images/projects/abujapi-cms1.png",
      "/images/projects/abujapi-cms2.png",
      "/images/projects/abujapi-profile.png"
    ],
    website: "https://admin.bpdabujapijabar.or.id/", 
    techStack: ["Laravel", "Inertia", "NextJS", "TailwindCSS", "PostgreSQL", "Redis"]
  },
  {
    title: "Abujapi Profile",
    description: "Corporate profile website for BPD Abujapi Jabar.",
    longDescription: "A professional and modern company profile website showcasing BPD Abujapi Jabar's services, portfolio, and company information. Built with Next.js and TypeScript, featuring responsive design, interactive elements, smooth animations, and comprehensive business information display.",
    images: [
      "/images/projects/abujapi-profile.png",
      "/images/projects/abujapi-profile-1.png",
      "/images/projects/abujapi-profile2.png"
    ],
    website: "https://bpdabujapijabar.or.id/", 
    techStack: ["NextJS", "TypeScript", "TailwindCSS"]
  },
  {
    title: "DrizyCraft",
    description: "E-commerce platform for digital design products.",
    longDescription: "A modern e-commerce platform specialized in digital design products. Built with a microservices architecture using NestJS for the backend and Next.js for the frontend. Features real-time inventory management, secure payment processing via Stripe, and efficient service communication through gRPC. The platform uses Docker for containerization, Redis for caching, and PostgreSQL for data persistence, ensuring scalability and high performance.",
    images: [
      "/images/projects/drizy1.png",
      "/images/projects/drizy-2.png",
      "/images/projects/drizy3.png"
    ],
    website: "https://drizycraft.com/", 
    techStack: ["NestJS", "NextJS", "TailwindCSS", "PostgreSQL", "Redis", "gRPC", "Docker", "Microservices", "Stripe"]
  },
  {
    title: "Batik Merawit",
    description: "Batik management system with product showcase and data management.",
    longDescription: "A batik management system that allows users to manage batik product data with CRUD operations, export data, and generate QR codes for each product. Built with Laravel and Inertia.js, featuring a beautiful landing page showcasing traditional batik patterns and modern e-commerce functionality.",
    images: [
      "/images/projects/batik-merawit-1.png",
      "/images/projects/batik-merawit-2.png"
    ],
    website: "https://batikmerawit.com/", 
    techStack: ["Laravel", "Inertia", "Bootstrap", "MySQL", "JavaScript"]
  }
];