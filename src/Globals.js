// src/Globals.js

class Globals {
    // Home Page Taglines and Descriptions
    static homePageShortTagLine = 'I am Narayan Vyas!';
    static homePageTagline = 'Researcher by Profession, Developer by Passion';

    // Counts
    static totalExperience = 8;
    static projectsCount = 40;
    static publicationCount = 36;
    static scopusPublicationCount = 33;
    static citationCount = 200;
    static hIndexCount = 8;
    static studentsTaughtCount = 1000;
    static totalBooksCount = 10;
    static workshopCount = 10;

    // Current Department and Organization
    static currentDepartment = 'Department of CSE';
    static currentOrganization = 'Chandigarh University';

    // Global Email
    static globalEmail = 'contact@narayanvyas.com';
    static myName = 'Narayan Vyas';

    // Usernames
    static facebookUsername = 'narayanvyas87';
    static linkedinUsername = 'narayanvyas87';
    static githubUsername = 'narayanvyas';
    static fiverrUsername = 'narayanvyas';
    static teacherOnUsername = 'narayanvyas';
    static scopusUsername = '57221967474';
    static orcidId = '0000-0003-4225-0764';
    static semanticScholarId = 'Narayan-Vyas/107727548';
    static googleScholarId = 'aFSIhMoAAAAJ';
    static wosResearcherId = 'IUQ-5540-2023';
    static vidwanId = '526462';
    static researchGateUsername = 'Narayan-Vyas';

    // URLs
    static facebookUrl = `https://www.facebook.com/${Globals.facebookUsername}`;
    static linkedinUrl = `https://www.linkedin.com/in/${Globals.linkedinUsername}/`;
    static githubUrl = `https://github.com/${Globals.githubUsername}`;
    static fiverrUrl = `https://www.fiverr.com/${Globals.fiverrUsername}`;
    static teacherOnUrl = `https://www.teacheron.com/tutor/3CgM`;
    static scopusUrl = `https://www.scopus.com/authid/detail.uri?authorId=${Globals.scopusUsername}`;
    static orcidUrl = `https://orcid.org/${Globals.orcidId}`;
    static semanticScholarUrl = `https://www.semanticscholar.org/author/${Globals.semanticScholarId}`;
    static googleScholarUrl = `https://scholar.google.com/citations?user=${Globals.googleScholarId}`;
    static researchGateUrl = `https://www.researchgate.net/profile/${Globals.researchGateUsername}`;
    static wosResearcherUrl = `https://www.webofscience.com/wos/author/record/${Globals.wosResearcherId}`;
    static vidwanUrl = `https://vidwan.inflibnet.ac.in/profile/${Globals.vidwanId}`;
    static globalEmailUrl = `mailto:${Globals.globalEmail}`;

    // Section Headings and Subheadings
    static aboutSectionHeading = 'About Me';
    static aboutSectionSubheading;
    static servicesSectionHeading = 'My Services';
    static servicesSectionSubheading = 'Experts in Every Aspect of Technology and Research';
    static certificatesSectionHeading = 'My Certificates';
    static certificatesSectionSubheading = 'Experts in Every Aspect of Technology and Research';
    static publicationSectionHeading = 'Recent Publications';
    static publicationSectionSubheading = 'Explore My Recent Academic Publications';
    static cfcSectionHeading = 'Call For Chapters';
    static cfcSectionSubheading = 'Submit Your Quality Book Chapter';
    static projectsSectionHeading = 'My Projects';
    static projectsSectionSubheading = 'Showcasing Excellence in Technology and Innovation';
    static booksSectionHeading = 'Published Books';
    static booksSectionSubheading = 'Showing All Published Books';
    static testimonialsSectionHeading = 'Testimonials';
    static testimonialsSectionSubheading = 'What People Says About Me?';
    static contactSectionHeading = 'Get In Contact';
    static contactSectionSubheading = 'Feel free to get in touch!';
    static contactSectionDescription = 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.';
    static ctcSectionHeading = 'Need Help?';
    static ctcSectionDescription = 'Book an Appointment for Expert Consultancy Schedule a session for Mobile App Development consultancy or Research Guidance tailored to your needs.';
    static footerDescription = 'Shaping Tomorrow\'s Technology: Leading Expertise in IoT, Mobile Apps, Remote Sensing, and Machine Learning.';

    // Highlights and Descriptions
    static aboutPublicationHighlight;
    static aboutStudentsHighlight;
    static aboutHIndexHighlight;
    static aboutCitationHighlight;
    static aboutBooksHighlight;
    static aboutWorkshopHighlight;
    static homePageHeaderDescription;
    static sidebarDescription;

    // Initialize computed highlights and descriptions
    static initialize() {
        Globals.aboutSectionSubheading = `With ${Globals.totalExperience}+ years of professional experience, I have great contribution in research and development`;
        Globals.aboutPublicationHighlight = `${Globals.scopusPublicationCount}+ publications indexed in Scopus`;
        Globals.aboutStudentsHighlight = `${Globals.studentsTaughtCount}+ students taught`;
        Globals.aboutHIndexHighlight = `${Globals.hIndexCount} h-index in Scopus`;
        Globals.aboutCitationHighlight = `${Globals.citationCount}+ academic citations`;
        Globals.aboutBooksHighlight = `${Globals.totalBooksCount}+ books`;
        Globals.aboutWorkshopHighlight = `${Globals.workshopCount}+ workshops conducted`;
        Globals.homePageHeaderDescription = `Narayan Vyas is an accomplished academician at ${Globals.currentOrganization}, specializing in computer science research. He qualified for NTA UGC NET & JRF on his first attempt. With expertise in IoT and Mobile Application Development, he has trained ${Globals.studentsTaughtCount}+ students globally and published extensively in Scopus journals and conferences. An active IEEE member, Narayan engages with IEEE Young Professional, IEEE GRSS, IEEE Sensors Council, and ISPRS. His research focuses on Remote Sensing, Machine Learning, Deep Learning, and Computer Vision. He has served as a keynote speaker and resource person for numerous workshops and webinars and has over ${Globals.publicationCount} publications and ${Globals.totalBooksCount}+ edited books with publishers like Wiley, De Gruyter, and IGI Global.`;
        Globals.sidebarDescription = `Narayan Vyas, an academician at ${Globals.currentOrganization}, specializes in computer science, focusing on IoT and Mobile App Development. He has trained over 1000 students globally and published extensively in Scopus journals. An active IEEE member, his research interests include Remote Sensing, Machine Learning, and Computer Vision.`;
    }
}

// Initialize the computed highlights
Globals.initialize();

export default Globals;
