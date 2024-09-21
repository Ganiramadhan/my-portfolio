import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { projects } from '../../utils/projectData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MyProject = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        image: '',
        title: '',
        description: '',
        languages: []
    });

    const openModal = (image, title, description, languages) => {
        setCurrentProject({ image, title, description, languages });
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const PrevArrow = ({ onClick }) => (
        <button 
            className="absolute left-0 z-10 p-2 -ml-6 text-white bg-gray-800 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 hover:bg-gray-600"
            onClick={onClick}
        >
            <FaArrowLeft />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button 
            className="absolute right-0 z-10 p-2 -mr-6 text-white bg-gray-800 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 hover:bg-gray-600"
            onClick={onClick}
        >
            <FaArrowRight />
        </button>
    );

    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: modalIsOpen ? null : <PrevArrow />, 
        nextArrow: modalIsOpen ? null : <NextArrow />, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true 
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true 
                }
            }
        ]
    };

    return (
        <div id='project' className="py-20 bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Some of My Projects
                </motion.h2>
                <div className="relative"> 
                    <Slider {...settings}>
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                openModal={openModal}
                            />
                        ))}
                    </Slider>
                </div>
            </div>

            <ProjectModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                currentImage={currentProject.image}
                currentTitle={currentProject.title}
                currentDescription={currentProject.description}
                currentLanguages={currentProject.languages}
            />
        </div>
    );
};

export default MyProject;
