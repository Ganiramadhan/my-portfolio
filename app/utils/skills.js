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
  SiKubernetes,
  SiTypescript
} from 'react-icons/si';

export const stacks = [
  // Programming Languages
  { name: 'TypeScript', category: 'Programming Language', icon: <SiTypescript />, color: 'text-blue-500', link: 'https://www.typescriptlang.org/', featured: true },
  { name: 'PHP', category: 'Backend Language', icon: <SiPhp />, color: 'text-indigo-400', link: 'https://www.php.net/' },
  { name: 'Go', category: 'Backend Language', icon: <SiGo />, color: 'text-cyan-500', link: 'https://go.dev/', featured: true },

  // Frontend
  { name: 'React.js', category: 'JavaScript Library', icon: <SiReact />, color: 'text-cyan-400', link: 'https://reactjs.org/', featured: true },
  { name: 'Next.js', category: 'React Framework', icon: <SiNextdotjs />, color: 'text-white', link: 'https://nextjs.org/', featured: true },
  { name: 'Tailwind CSS', category: 'CSS Framework', icon: <SiTailwindcss />, color: 'text-sky-400', link: 'https://tailwindcss.com/', featured: true },

  // Backend Frameworks
  { name: 'Nest.js', category: 'Backend Framework', icon: <SiNestjs />, color: 'text-red-500', link: 'https://nestjs.com/', featured: true },
  { name: 'Express.js', category: 'Backend Framework', icon: <FaNodeJs />, color: 'text-green-500', link: 'https://expressjs.com/' },
  { name: 'Laravel', category: 'PHP Framework', icon: <SiLaravel />, color: 'text-red-500', link: 'https://laravel.com/', featured: true },

  // Databases
  { name: 'PostgreSQL', category: 'Database', icon: <SiPostgresql />, color: 'text-blue-400', link: 'https://www.postgresql.org/', featured: true },
  { name: 'MySQL', category: 'Database', icon: <SiMysql />, color: 'text-orange-400', link: 'https://www.mysql.com/' },

  // Messaging & Streaming
  { name: 'RabbitMQ', category: 'Message Broker', icon: <SiRabbitmq />, color: 'text-orange-500', link: 'https://www.rabbitmq.com/', featured: true },
  { name: 'Kafka', category: 'Event Streaming', icon: <SiApachekafka />, color: 'text-white', link: 'https://kafka.apache.org/' },

  // DevOps & Infrastructure
  { name: 'Docker', category: 'Containerization', icon: <FaDocker />, color: 'text-blue-400', link: 'https://www.docker.com/', featured: true },
  { name: 'Kubernetes', category: 'Container Orchestration', icon: <SiKubernetes />, color: 'text-blue-500', link: 'https://kubernetes.io/', featured: true },
  { name: 'CI/CD', category: 'Automation', icon: <SiGithubactions />, color: 'text-white', link: 'https://github.com/features/actions', featured: true },

  // Communication
  { name: 'gRPC', category: 'Remote Procedure Call', icon: <SiTrpc />, color: 'text-green-500', link: 'https://grpc.io/', featured: true },
];
