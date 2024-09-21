import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project4.png';
import projectImage5 from '../assets/project5.png';
import projectImage6 from '../assets/project6.png';
import projectImage7 from '../assets/project7.png';
import projectImage8 from '../assets/project8.png';

export const projects = [
    {
        id: 1,
        image: projectImage1,
        title: 'GaniPedia Marketplace',
        description: "Fish product marketplace built with Laravel 11, Inertia, and React, featuring a login and registration system using middleware for user authentication. The project includes product management with CRUD functionality, integrated with Midtrans as the payment gateway and RajaOngkir for checking shipping costs.",
        link: 'https://github.com/Ganiramadhan/ganipedia-laravel11',
        languages: ['Laravel', 'Inertia', 'ReactJs', 'SQLite', 'Tailwind CSS', 'Midtrans', 'Raja Ongkir']
    },
    {
        id: 2,
        image: projectImage2,
        title: 'AI Generation Tool',
        description: "An AI-powered application created with React.js, utilizing the Groq AI API to generate intelligent responses. This project showcases the integration of advanced AI technologies within a modern web framework.",
        link: 'https://react-groq.vercel.app',
        languages: ['React.js', 'Groq AI']
    },
    {
        id: 3,
        image: projectImage3,
        title: 'Fish Marketplace',
        description: "This repository contains the code for a fish marketplace application that allows users to view and purchase fresh fish. The application is built using React, features responsive design, modern UI elements, and includes integration with payment systems such as Midtrans for processing transactions.",
        link: 'https://github.com/Ganiramadhan/fish-marketplace',
        languages: ['TypeScript', 'Tailwind CSS', 'Midtrans', 'Next.js']
    },    

    {
        id: 4,
        image: projectImage4,
        title: 'Financial Reporting',
        description: "A user-friendly financial reporting platform built with Laravel, Inertia.js, and Bootstrap. This project is designed to present financial data clearly and efficiently to users.",
        link: 'https://keuangan.megamaster.id',
        languages: ['Laravel', 'Inertia.js', 'Bootstrap']
    },
    {
        id: 5,
        image: projectImage5,
        title: 'Quiz App',
        description: "A dynamic quiz application built with Next.js, TypeScript, and Tailwind CSS. Users can take quizzes with multiple-choice questions sourced from a Quiz API. The app features a modern and responsive design, ensuring a seamless experience across devices. With intuitive navigation and integrated SweetAlert2 for user feedback, it enhances interaction during quiz sessions and displays results effectively.",
        link: 'https://quiz-pedia.vercel.app/',
        languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Quiz API']
    },    

    {
        id: 6,
        image: projectImage6,
        title: 'Dealer Landing Page',
        description: "A visually appealing landing page for a Toyota automobile dealership. Developed with HTML, CSS, and JavaScript, this project emphasizes responsive design and user engagement.",
        link: 'https://www.dealerbandungtoyota.com',
        languages: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 7,
        image: projectImage7,
        title: 'Movie List',
        description: "Description: This repository contains the code for a movie listing application that allows users to search, filter, and manage their watchlist of movies. The application is built using React and features responsive design, modern UI elements, and integration with The Movie Database (TMDb) API for fetching movie data.",
        link: 'https://movie-pedia-sage.vercel.app',    
        languages: ['React.js', 'Node.js', 'Tailwind CSS', 'TMDb API']
    },

    {
        id: 8,
        image: projectImage8,
        title: 'Todolist App',
        description: "Description: This repository contains code for a simple todo application that allows users to add, delete, and manage their list of tasks. The application is built using React and features responsive design, modern gradients, and integration with SweetAlert2 for user action confirmation.",
        link: 'https://github.com/Ganiramadhan/todolist-app',
        languages: ['Supabase', 'Express', 'React,Js','Node.Js','Tailwindcss']
    },
    
];
