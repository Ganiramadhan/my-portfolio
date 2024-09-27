import React from 'react';
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, openModal }) => {
    const imageClick = (e) => {
        e.stopPropagation();
        openModal(project.image, project.title, project.description, project.languages);
    };

    return (
        <div className="p-4" data-aos="fade-up">
            <div
                className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden cursor-pointer flex flex-col h-full"
                data-aos="zoom-in"
            >
                <div className="relative h-48 p-2 flex-grow">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={imageClick}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        <div className="flex space-x-4">
                            <div
                                className="flex items-center justify-center"
                                title="View Image"
                                onClick={imageClick}
                            >
                                <FaEye className="text-white text-2xl cursor-pointer" />
                            </div>
                            <div
                                className="flex items-center justify-center"
                                title="Visit Website"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.link, '_blank');
                                }}
                            >
                                <FaExternalLinkAlt className="text-white text-2xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.description.split(' ').slice(0, 10).join(' ')}...</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
