import { FaNodeJs } from 'react-icons/fa';
import { SiLaravel, SiReact, SiTailwindcss, SiPostgresql, SiMysql, SiNextdotjs, SiNestjs, SiPhp } from 'react-icons/si';

export const stacks = [
  { name: 'PHP', category: 'Backend Language', icon: <SiPhp />, color: 'text-blue-600', link: 'https://www.php.net/' },
  { name: 'JavaScript', category: 'Programming Language', icon: <SiReact />, color: 'text-yellow-500', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', featured: false },
  { name: 'TypeScript', category: 'Programming Language', icon: <SiReact />, color: 'text-blue-500', link: 'https://www.typescriptlang.org/', featured: true },
  { name: 'React.js', category: 'JavaScript Library', icon: <SiReact />, color: 'text-cyan-400', link: 'https://reactjs.org/', featured: true },
  { name: 'Next.js', category: 'Framework React Web', icon: <SiNextdotjs />, color: 'text-black', link: 'https://nextjs.org/', featured: true },
  { name: 'Nest.js', category: 'Backend Framework', icon: <SiNestjs />, color: 'text-red-600', link: 'https://nestjs.com/', featured: true },
  // { name: 'jQuery', category: 'JavaScript Library', icon: <SiJquery />, color: 'text-blue-600', link: 'https://jquery.com/' },
  { name: 'Express.js', category: 'Backend Framework', icon: <FaNodeJs />, color: 'text-black', link: 'https://expressjs.com/' },
  { name: 'Node.js', category: 'Runtime Environment', icon: <FaNodeJs />, color: 'text-green-500', link: 'https://nodejs.org/' },
  { name: 'Laravel', category: 'Backend Framework PHP', icon: <SiLaravel />, color: 'text-red-500', link: 'https://laravel.com/', featured: true },
  // { name: 'Bootstrap', category: 'CSS Framework', icon: <SiBootstrap />, color: 'text-indigo-600', link: 'https://getbootstrap.com/' },
  { name: 'Tailwind CSS', category: 'CSS Framework', icon: <SiTailwindcss />, color: 'text-sky-400', link: 'https://tailwindcss.com/', featured: true },
  // { name: 'Firebase', category: 'Database & Auth', icon: <FaCloud />, color: 'text-yellow-500', link: 'https://firebase.google.com/' },
  { name: 'MySQL', category: 'Database', icon: <SiMysql />, color: 'text-yellow-500', link: 'https://www.mysql.com/' },
  { name: 'PostgreSQL', category: 'Database', icon: <SiPostgresql />, color: 'text-blue-700', link: 'https://www.postgresql.org/', featured: true },
  // { name: 'Supabase', category: 'Database & Auth', icon: <SiSupabase />, color: 'text-green-500', link: 'https://supabase.com/' },
];
