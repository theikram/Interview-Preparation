// INTERVIEW PREP DATA - Main Loader
// This file combines all separate data modules into one interviewData object
// Individual modules are loaded from data/ folder before this file

const interviewData = {
    // Categories loaded from separate files
    "HTML": typeof htmlData !== 'undefined' ? htmlData : {},
    "CSS": typeof cssData !== 'undefined' ? cssData : {},
    "JavaScript": typeof javascriptData !== 'undefined' ? javascriptData : {},
    "TypeScript": typeof typescriptData !== 'undefined' ? typescriptData : {},
    "MERN Stack": typeof mernData !== 'undefined' ? mernData : {},
    "React": typeof reactData !== 'undefined' ? reactData : {},
    "Next.js": typeof nextjsData !== 'undefined' ? nextjsData : {},
    "Tailwind CSS": typeof tailwindData !== 'undefined' ? tailwindData : {},
    "Node.js": typeof nodeData !== 'undefined' ? nodeData : {},
    "Express.js": typeof expressData !== 'undefined' ? expressData : {},
    "Databases": typeof databasesData !== 'undefined' ? databasesData : {},
    "Auth & Security": typeof authData !== 'undefined' ? authData : {},
    "Networking": typeof networkingData !== 'undefined' ? networkingData : {},
    "DSA & Coding": typeof dsaCodingData !== 'undefined' ? dsaCodingData : {},
    "OOP": typeof oopData !== 'undefined' ? oopData : {},
    "DevOps & Cloud": typeof devopsData !== 'undefined' ? devopsData : {},
    "Python & AI": typeof pythonAiData !== 'undefined' ? pythonAiData : {},
    "Software Engineering": typeof softwareEngData !== 'undefined' ? softwareEngData : {},
    "Projects": typeof projectsData !== 'undefined' ? projectsData : {},
    "Courses & Certs": typeof coursesData !== 'undefined' ? coursesData : {},
    "Behavioral": typeof behavioralData !== 'undefined' ? behavioralData : {}
};

// If used in Node.js (for testing)
if (typeof module !== 'undefined') {
    module.exports = interviewData;
}
