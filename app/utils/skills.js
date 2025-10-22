import { FaNodeJs, FaDocker } from 'react-icons/fa';
import { 
  SiLaravel, 
  SiReact, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMysql, 
  SiNextdotjs, 
  SiNestjs, 
  SiPhp, 
  SiRabbitmq, 
  SiApachekafka, 
  SiGithubactions, 
  SiGo,
  SiTrpc,
  SiDotnet
} from 'react-icons/si';

export const stacks = [
  // Backend Languages
  { name: 'PHP', category: 'Backend Language', icon: <SiPhp />, color: 'text-blue-600', link: 'https://www.php.net/' },
  { name: 'Go', category: 'Backend Language', icon: <SiGo />, color: 'text-cyan-500', link: 'https://go.dev/', featured: true },
  { name: 'C#', category: 'Backend Language', icon: <SiDotnet />, color: 'text-purple-600', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/', featured: true },

  // Programming / Frontend
  { name: 'TypeScript', category: 'Programming Language', icon: <SiReact />, color: 'text-blue-500', link: 'https://www.typescriptlang.org/', featured: true },
  { name: 'React.js', category: 'JavaScript Library', icon: <SiReact />, color: 'text-cyan-400', link: 'https://reactjs.org/', featured: true },
  { name: 'Next.js', category: 'React Framework', icon: <SiNextdotjs />, color: 'text-black', link: 'https://nextjs.org/', featured: true },
  { name: 'Tailwind CSS', category: 'CSS Framework', icon: <SiTailwindcss />, color: 'text-sky-400', link: 'https://tailwindcss.com/', featured: true },

  // Backend Frameworks
  { name: 'Nest.js', category: 'Backend Framework', icon: <SiNestjs />, color: 'text-red-600', link: 'https://nestjs.com/', featured: true },
  { name: 'Express.js', category: 'Backend Framework', icon: <FaNodeJs />, color: 'text-green-600', link: 'https://expressjs.com/' },
  { name: 'Laravel', category: 'Backend Framework PHP', icon: <SiLaravel />, color: 'text-red-500', link: 'https://laravel.com/', featured: true },
  { name: '.NET', category: 'Backend Framework', icon: <SiDotnet />, color: 'text-indigo-600', link: 'https://dotnet.microsoft.com/', featured: true },

  // Databases
  { name: 'MySQL', category: 'Database', icon: <SiMysql />, color: 'text-yellow-500', link: 'https://www.mysql.com/' },
  { name: 'PostgreSQL', category: 'Database', icon: <SiPostgresql />, color: 'text-blue-700', link: 'https://www.postgresql.org/', featured: true },

  // Messaging Systems
  { name: 'RabbitMQ', category: 'Message Broker', icon: <SiRabbitmq />, color: 'text-orange-500', link: 'https://www.rabbitmq.com/', featured: true },
  { name: 'Kafka', category: 'Event Streaming Platform', icon: <SiApachekafka />, color: 'text-black', link: 'https://kafka.apache.org/', featured: false },

  // DevOps / CI-CD
  { name: 'Docker', category: 'Containerization', icon: <FaDocker />, color: 'text-sky-500', link: 'https://www.docker.com/', featured: true },
  { name: 'CI/CD', category: 'Automation & Deployment', icon: <SiGithubactions />, color: 'text-gray-700', link: 'https://github.com/features/actions', featured: true },

  // Communication / RPC
  { name: 'gRPC', category: 'Remote Procedure Call', icon: <SiTrpc />, color: 'text-green-700', link: 'https://grpc.io/', featured: true },
];
