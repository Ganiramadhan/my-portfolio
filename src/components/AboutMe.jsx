import { useState } from 'react';
import { FaUserAlt, FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import { experienceContent } from '../utils/experienceData';
import { ClipLoader } from 'react-spinners';

const TabContent = ({ activeTab, handleToggleAccordion, openAccordions, showFullText, handleToggleText }) => {
    return (
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4 font-jetbrains no-select transition-opacity duration-500 ease-in-out opacity-100">
            {activeTab === 'about' && (
                <div key="about">
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">ABOUT ME</h1>
                    <p>
                        Hello, I am <span className="highlight">Gani Ramadhan</span>, a passionate <span className="highlight">Fullstack Developer</span> with over a year of experience in building and maintaining web applications. My technical expertise includes <span className="highlight">PHP</span>, <span className="highlight">Laravel</span>, <span className="highlight">JavaScript</span>, <span className="highlight">ReactJS</span>, <span className="highlight">Next.js</span>, and <span className="highlight">Node.js</span>. I am proficient in using CSS frameworks such as <span className="highlight">Tailwind CSS</span> and <span className='highlight'>Material UI</span> to create <span className='highlight'>responsive and visually appealing user interfaces.</span> I have a strong enthusiasm for learning and continually expanding my knowledge, particularly in the field of technology.
                    </p>
                    {!showFullText && (
                        <span
                            onClick={handleToggleText}
                            className="cursor-pointer text-blue-500 hover:text-blue-700"
                        >
                            Load More
                        </span>
                    )}
                    {showFullText && (
                        <>
                            <p>
                                My high level of dedication and <span className='highlight'>problem-solving skills</span> enable me to tackle complex challenges effectively. I am committed to delivering high-quality solutions and am always eager to collaborate and create innovative projects.
                            </p>
                            <span
                                onClick={handleToggleText}
                                className="cursor-pointer text-blue-500 hover:text-blue-700"
                            >
                                Show Less
                            </span>
                        </>
                    )}
                </div>
            )}
            {activeTab === 'experience' && (
                <div key="experience">
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Professional History</h1>
                    <div className="space-y-4">
                        {experienceContent.map((exp, index) => (
                            <div key={index} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => handleToggleAccordion(index)}
                                >
                                    <h5 className={`text-xl font-semibold ${openAccordions[index] ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'}`}>
                                        <FaBriefcase className="inline-block mr-2" /> 
                                        {exp.experience}
                                    </h5>
                                    <span className="text-blue-500">
                                        {openAccordions[index] ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                {openAccordions[index] && (
                                    <div className="mt-4 transition-max-height duration-500 ease-in-out">
                                        <p className="text-gray-600 dark:text-gray-400">{exp.date}</p>
                                        <p>{exp.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [showFullText, setShowFullText] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openAccordions, setOpenAccordions] = useState(
        Array(experienceContent.length).fill(false)
    );

    const handleToggleAccordion = (index) => {
        const updatedAccordions = [...openAccordions];
        updatedAccordions[index] = !updatedAccordions[index];
        setOpenAccordions(updatedAccordions);
    };

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div id="about" className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 px-6 md:px-10 flex items-center justify-center" style={{ minHeight: '100vh' }}>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <ClipLoader color="#ffffff" size={60} />
                </div>
            )}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-10 md:space-y-0" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <div className="md:w-2/3 max-w-5xl mx-auto">
                    <div>
                        <div className="flex justify-center mb-6">
                            <button
                                className={`px-6 py-2 rounded-t-lg flex items-center ${activeTab === 'about' ? 'bg-gray-200 dark:bg-blue-400 text-gray-800 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('about')}
                            >
                                <FaUserAlt className="mr-2" /> 
                                About
                            </button>
                            <button
                                className={`px-6 py-2 rounded-t-lg flex items-center ${activeTab === 'experience' ? 'bg-gray-200 dark:bg-blue-400 text-gray-800 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                <FaBriefcase className="mr-2" /> 
                                Experience
                            </button>
                        </div>
                        <div className="tab-content relative overflow-hidden transition-all duration-500" style={{ minHeight: '400px' }}>
                            <TabContent
                                activeTab={activeTab}
                                openAccordions={openAccordions}
                                handleToggleAccordion={handleToggleAccordion}
                                showFullText={showFullText}
                                handleToggleText={handleToggleText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
